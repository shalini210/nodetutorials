exports.sum=(x,y)=>
{
    return x+y
}
exports.sub=(x,y)=>
    {
           if(x>y)
            {
                return x-y
            }                     
            return y-x;
           
    }
exports.multi=(x,y)=>
        {
            return x*y
        }
exports.findEven=(n)=>
{
    if(n%2==0)
    {
        return "even"
    }
    return "odd"
}