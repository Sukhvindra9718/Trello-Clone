const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const List = require('../models/listModel');
const Board = require('../models/boardModel');


let boardCache = null;
exports.getBoardById = catchAsyncErrors(async (req, res, next) => {
    try {
        const { boardId } = req.params;
        const { boardTitle } = req.body;
     
        if (!boardId) {
            return next(new ErrorHandler('Board ID is required', 400));
        }
    
        if (!boardTitle) {
            return next(new ErrorHandler('Board Title is required', 400));
        }
        
        if (boardCache && boardCache?.boardTitle === boardTitle) {
            console.log("Cached board");
            return res.status(201).json({
                success: true,
                newBoard: boardCache
            });
        }
        const board = await Board.findById(boardId);
        if (!board) {
            return next(new ErrorHandler('Board not found', 404));
        }
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
        boardCache = newBoard;
     
        res.status(201).json({
            success: true,
            newBoard
        });
    } catch (error) {
        console.log(error.message);
        return next(new ErrorHandler(error.message, 400));
    }

});