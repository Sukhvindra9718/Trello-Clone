const Workspace = require('../models/workspaceModel');
const Board = require('../models/boardModel');
const List = require('../models/listModel');
const Card = require('../models/cardModel');

let cachedWorkspaces = null;
exports.getWorkspaces = async (req, res) => {
    try {
        if (cachedWorkspaces) {
            console.log('Returning cached workspaces', cachedWorkspaces);
            return res.status(200).json({
                success: true,
                data: cachedWorkspaces,
            });
        }
        const workspaces = await Workspace.find({ user: req.user._id }).sort({ createdAt: 1 }).lean();

        // For each workspace, retrieve its boards in ascending order
        for (const workspace of workspaces) {
            const boards = await Board.find({ workspace: workspace._id }).sort({ boardTitle: 1 }).lean();

            for (const board of boards) {
                // Retrieve lists in ascending order
                const lists = await List.find({ board: board._id }).sort({ listOrder: 1 }).lean();

                for (const list of lists) {
                    // Retrieve cards in ascending order
                    const cards = await Card.find({ list: list._id }).sort({ cardOrder: 1 }).lean();
                    list.cards = cards;
                }

                board.lists = lists;
            }

            workspace.boards = boards;
        }
        cachedWorkspaces = workspaces;
        return res.status(200).json({
            success: true,
            data: cachedWorkspaces,
        });

    } catch (err) {
        console.log(err);
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};
