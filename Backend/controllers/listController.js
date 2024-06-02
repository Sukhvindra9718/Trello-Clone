const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const List = require('../models/listModel');
const Board = require('../models/boardModel');


exports.createList = catchAsyncErrors(async (req, res, next) => {
    try {
        const { listTitle, boardId, listOrder } = req.body;

        await List.create({
            listTitle,
            board: boardId,
            listOrder
        });
        const board = await Board.findById(boardId);
        const lists = await List.find({ board: boardId });

        const newBoard = {
            _id: board._id,
            boardTitle: board.boardTitle,
            boardVisibility: board.boardVisibility,
            boardMembers: board.boardMembers,
            workspace: board.workspace,
            boardCreatedAt: board.boardCreatedAt,
            __v: board.__v,
            lists
        };
        res.status(201).json({
            success: true,
            newBoard
        });
    } catch (error) {
        return next(new ErrorHandler(error.message, 400));
    }

});