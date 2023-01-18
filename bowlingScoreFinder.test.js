const {getScore,findBestScore}=require('./bowlingScoreFinder');
describe('Bowl score finder',()=>{
    describe('Calculate the score of each roll',()=>{
        it('Should throw error when input is not an array',()=>{
            expect(()=>getScore("abc")).toThrow('Not an array');
        })
        it('Should return error message when array is empty',()=>{
            expect(()=>getScore([])).toThrow('Empty error');
        });
        it('Should return error message when any element of array is not integer',()=>{
            expect(()=>getScore([1,2,3,4,'a',5])).toThrow('Not all elements are numbers');
        });
        it('Should return total score when any element of array is as required',()=>{
            expect(getScore([3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6])).toBe(90);
        });
    })
    describe('Calculate the best score of all rolls',()=>{
        it('Should throw error when input is not an array',()=>{
            expect(()=>findBestScore("abc")).toThrow('Not an array');
        })
        it('Should return error message when array is empty',()=>{
            expect(()=>findBestScore([])).toThrow('Empty error');
        });
        it('Should return best total score when any element of array is as required',()=>{
            expect(()=>getScore([[3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6],[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]])).toBe(90);
        });
    })
})