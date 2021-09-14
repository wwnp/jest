const sum = (a,b) => a + b

const nativeNull = () => null

function exprect(value){
  return {
    toBe: exp => {
      if(value === exp){
        console.log('success')
      }else{
        console.error('errro')
      }
    }
  }
}
module.exports = {sum,nativeNull}