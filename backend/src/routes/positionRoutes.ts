import { getCandidatesByPosition, getInterviewFlowByPosition, getAllPositions } from '../presentation/controllers/positionController';


const router = require('express').Router();

router.get('/', getAllPositions);
router.get('/:id/candidates', getCandidatesByPosition);
router.get('/:id/interviewflow', getInterviewFlowByPosition);

router.get('/:id/stats', getPositionStats);

export default router;
