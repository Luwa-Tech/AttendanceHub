// import { CustomError } from "../utils/errors.js"

// const manageErrors = (func) => {
//     return async (req, res, next) => {
//         try {
//             await func(req, res, next);
//         } catch (e) {
//             if (e instanceof CustomError) {
//                 console.error(`Error occured: ${e.message}`);
//                 res.status(e.statusCode).json({ error: e.message, details: e.details })
//             } else {
//                 console.error('Something else happened!', e);
//                 res.status(500).json({ error: 'Internal Server Error' })
//             }
//         }
//     }
// };

// export default manageErrors;