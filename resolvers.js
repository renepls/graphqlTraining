import Table1Model from './table1';
import { rejects } from 'assert';
const resolvers = {
    Query: {
        callDataTable1: () => {
            return Table1Model.find({});
        }
    },
    Mutation: {
        insertDataTable1: (root, {input}) => {
            const res = new Table1Model({
                name: input.name,
                lastname: input.lastname
            });
            res.id = res._id;
            return new Promise((resolve, object)=> {
                res.save((error)=>{
                    if(error) rejects(error)
                    else resolve(res)
                });
            })
        }
    }
}
export default resolvers;