const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const List = require('../models/listModel');
const Board = require('../models/boardModel');
const Card = require('../models/cardModel');
const NodeCache = require("node-cache");
const myCache = new NodeCache();
const sendEmail = require('../utils/sendEmail');

// Board Controller
exports.getBoardById = catchAsyncErrors(async (req, res, next) => {
    try {
        const { boardId } = req.params;
        console.log(boardId)
        if (!boardId) {
            return next(new ErrorHandler('Board ID is required', 400));
        }

        const cachedBoard = myCache.get("board");

        if (cachedBoard !== undefined) {
            console.log("Board Controller Retrieve Cached board", cachedBoard.lists[1].cards.length);
            return res.status(201).json({
                success: true,
                newBoard: cachedBoard
            });
        }
        const board = await Board.findById(boardId);
        if (!board) {
            return next(new ErrorHandler('Board not found', 404));
        }
        const newLists = await List.find({ board: boardId }).sort({ listOrder: 1 });

        const lists = newLists.map(async (list) => {
            return {
                _id: list._id,
                listTitle: list.listTitle,
                listOrder: list.listOrder,
                boardId: board._id,
                cards: await Card.find({ list: list._id }).sort({ cardOrder: 1 })
            }
        });

        const newBoard = {
            _id: board._id,
            boardTitle: board.boardTitle,
            boardVisibility: board.boardVisibility,
            boardMembers: board.boardMembers,
            lists: await Promise.all(lists)
        }

        success = myCache.set("board", newBoard, 10 * 60 * 1000);

        res.status(201).json({
            success: true,
            newBoard
        });
    } catch (error) {
        console.log(error.message);
        return next(new ErrorHandler(error.message, 400));
    }

});

// List Controller
exports.createList = catchAsyncErrors(async (req, res, next) => {
    try {
        const { listTitle, boardId, listOrder } = req.body;

        await List.create({
            listTitle,
            board: boardId,
            listOrder
        });
        const board = await Board.findById(boardId);
        const newLists = await List.find({ board: board._id }).sort({ listOrder: 1 });

        const lists = newLists.map(async (list) => {
            return {
                _id: list._id,
                listTitle: list.listTitle,
                listOrder: list.listOrder,
                boardId: board._id,
                cards: await Card.find({ list: list._id }).sort({ cardOrder: 1 })
            }
        });

        const newBoard = {
            _id: board._id,
            boardTitle: board.boardTitle,
            boardVisibility: board.boardVisibility,
            boardMembers: board.boardMembers,
            lists: await Promise.all(lists)
        }
        success = myCache.set("board", newBoard, 10 * 60 * 1000);
        res.status(201).json({
            success: true,
            newBoard
        });
    } catch (error) {
        return next(new ErrorHandler(error.message, 400));
    }

});

// Card Controller
exports.createCard = catchAsyncErrors(async (req, res, next) => {
    try {
        const { cardTitle, listId, cardOrder } = req.body;
        await Card.create({
            cardTitle,
            list: listId,
            cardOrder
        });
        const list = await List.findById({ _id: listId });
        const board = await Board.findById({ _id: list.board });
        const newLists = await List.find({ board: board._id }).sort({ listOrder: 1 });

        const lists = newLists.map(async (list) => {
            return {
                _id: list._id,
                listTitle: list.listTitle,
                listOrder: list.listOrder,
                boardId: board._id,
                cards: await Card.find({ list: list._id }).sort({ cardOrder: 1 })
            }
        });

        const newBoard = {
            _id: board._id,
            boardTitle: board.boardTitle,
            boardVisibility: board.boardVisibility,
            boardMembers: board.boardMembers,
            lists: await Promise.all(lists)
        }
        success = myCache.set("board", newBoard, 10 * 60 * 1000);

        res.status(201).json({
            success: true,
            newBoard
        });
    } catch (error) {
        return next(new ErrorHandler(error.message, 400));
    }

});

exports.shareBoard = catchAsyncErrors(async (req, res, next) => {
    try {
        const { boardId, email } = req.body;
        const board = await Board.findById(boardId);
        console.log(board);
        if (!board) {
            return next(new ErrorHandler('Board not found', 404));
        }
        board.boardMembers.push(email);
        await board.save();

        // Create email template for invite member
        const message = `
        <div style="width:520px;margin:auto;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;font-size:14px;color:#172b4d">
    <div class="adM"> </div>
    <table
        style="width:100%;background:#fafbfc;margin:12px 0;padding:40px 40px 25px;border-radius:10px;border-spacing:0px;text-align:left">
        <tbody>
            <tr>
                <td> <img width="85"
                        src="https://ci3.googleusercontent.com/meips/ADKq_Nak7B1vyzx0dPBXzcxwLRSH4CkF4bny9PPfxK03gOReeNpaRrpRKXuSI4qvhb656HtkTlucoxJD1W3dVsCNij0yqw=s0-d-e1-ft#https://trello.com/images/logo-new-sm-2x.png"
                        title="Trello" class="CToWUd" data-bit="iit"> </td>
            </tr>
            <tr>
                <td>
                    <h2
                        style="font:28px -apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;font-weight:700;line-height:33px;margin:20px 0 16px;letter-spacing:-0.5px">
                        ${req.user.name} invited you to their board ${board.boardTitle} </h2>

                    <p style="line-height:21px"> Join them on Trello to collaborate, manage projects, and reach new
                        productivity peaks. </p>

                    <p style="margin:24px 0;line-height:32px"> <a
                            href="http://localhost:5173/boardinvited/${boardId}"
                            style="border-radius:3px;background:#0052cc;color:#ffffff;font-weight:500;line-height:20px;font-weight:500;text-decoration:none;padding:8px 15px;margin-bottom:0"
                            target="_blank"
                            data-saferedirecturl="https://www.google.com/url?q=https://trello.com/boardinvited/665752ca08a461e0d609c745/666192d343171b64a3727916/4e9d78142221c792a1ce51f38030e3e7?utm_source%3Deval-email%26utm_medium%3Demail%26utm_campaign%3Dboard-invite&amp;source=gmail&amp;ust=1717757057158000&amp;usg=AOvVaw18z-l65BgoULgGv3y8iAw_">
                            Go to board </a> </p>

                    <p style="line-height:21px;margin:0;margin-top:24px"> <b>What is Trello?</b> Imagine a white board,
                        filled with lists of sticky notes, with each note as a task. Now imagine that each of those
                        sticky notes has photos, attachments from other data sources like Jira or Salesforce, documents,
                        due dates, and more. <br><br> Now imagine that you can take that whiteboard anywhere you go on
                        your smartphone, and can access it from any computer through the web. That's Trello! <a
                            href="http://trello.com" style="color:#5e6c84" target="_blank"
                            data-saferedirecturl="https://www.google.com/url?q=http://trello.com&amp;source=gmail&amp;ust=1717757057158000&amp;usg=AOvVaw3ruvIol9HHc1purpsZycXj">Learn
                            more</a> </p>
                </td>
            </tr>
        </tbody>
    </table>

    <div style="width:405px;border-top:solid 2px #dfe1e6;margin:48px auto 0;text-align:center">
        <div style="margin-top:22px"> <img width="147"
                src="https://ci3.googleusercontent.com/meips/ADKq_NYWNgehCpxtHrpK7UL6VE-7bV3kc5ybhatv-ECKJ31CDv71rHmRZevhHHnPM9GGI07v-A1xryvGEJIUf8aNVUCo9Q=s0-d-e1-ft#https://trello.com/images/atlassian-logo.png"
                title="Atlassian" class="CToWUd" data-bit="iit"> </div>

        <div style="font-size:11px;margin-top:18px"> 
            <a
                href="https://trello.com/unsubscribe?idMember=666192d343171b64a3727916&amp;type=invites&amp;hash=a06bdf6f082ae431e9c7761e30615370f084e450"
                style="color:#0052cc;text-decoration:none;font-weight:700" target="_blank"
                data-saferedirecturl="https://www.google.com/url?q=https://trello.com/unsubscribe?idMember%3D666192d343171b64a3727916%26type%3Dinvites%26hash%3Da06bdf6f082ae431e9c7761e30615370f084e450&amp;source=gmail&amp;ust=1717757057158000&amp;usg=AOvVaw1ckEtlampM3mdFyNB6kQIh">
                Unsubscribe from these emails 
            </a> 
        </div>
    </div>


    <img border="0" width="1" height="1" alt=""
        src="https://ci3.googleusercontent.com/meips/ADKq_NZ3aeaWW2MR4H0FMYuR2_0iO2CzAGJYDjqu3s7JcDTvSWOQEQkCeK7KQCCywY1lVZrXk6IsWfEmyst4skf00GZ4t0o7DM7URVrM5g3XlKDdCbxG0Qj684V_oI34PEyU6ZvSFe7FpbYqOa-rvmoJIj5c3zRmAt1Xchg8u0M7SnzKDRSJfZy5Ati-MRdbf13g9p7487P900DW_YDh4dwnR-nnBPyg69hQgClyYfCmPXOb=s0-d-e1-ft#https://atlas-trk.prd.msg.ss-inf.net/q/GNc0bF4DN131uWtD-KmNsw~~/AAAAAQA~/RgRoRBfUPlcLYXRsYXNzaWFudXNCCmZV1JJhZiVAPTdSFHNreWJ1aWxkMjlAZ21haWwuY29tWAQAAAAA"
        class="CToWUd" data-bit="iit">
    <div class="yj6qo"></div>
    <div class="adL">
    </div>
        </div>`


        sendEmail({
            email: email,
            subject: `${req.user.name} invited you to a Trello Board`,
            message
        });
        res.status(201).json({
            success: true,
        });
    } catch (error) {
        return next(new ErrorHandler(error.message, 400));
    }

});