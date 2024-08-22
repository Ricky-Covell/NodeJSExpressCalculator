// // // // // // // // // // GLOBAL // // // // // // // // // // 
const express = require('express');
const app = express();
const ExpressError = require('./expressError');

const { findMode, findMean, findMedian, validateAndConvertQuery } = require('./calculator');




// // // // // // // // // // ROUTES // // // // // // // // // // 
app.get('/mean', (req, res, next) => {
    if (!req.query.nums) {
        throw new ExpressError('NO NUMBERS HAVE BEEN PASSED IN.')
    }
    let numsQuery = req.query.nums;
    let numsArr = validateAndConvertQuery(numsQuery);
    if (numsArr instanceof Error) {
        throw new ExpressError(numsArr.message);
    }

    let result = {
        operation: 'mean',
        numsq: numsQuery,
        numsarr: numsArr,
        result: findMean(numsArr)
    }

    return res.send(result);
});



app.get('/median', (req, res, next) => {
    if (!req.query.nums) {
        throw new ExpressError('NO NUMBERS HAVE BEEN PASSED IN.')
    }
    let numsQuery = req.query.nums;
    let numsArr = validateAndConvertQuery(numsQuery);
    if (numsArr instanceof Error) {
        throw new ExpressError(numsArr.message);
    }

    let result = {
        operation: 'median',
        numsq: numsQuery,
        numsarr: numsArr,
        result: findMedian(numsArr)
    }

    return res.send(result);
})




app.get('/mode', (req, res, next) => {
    if (!req.query.nums) {
        throw new ExpressError('NO NUMBERS HAVE BEEN PASSED IN.')
    }
    let numsQuery = req.query.nums;
    let numsArr = validateAndConvertQuery(numsQuery);
    if (numsArr instanceof Error) {
        throw new ExpressError(numsArr.message);
    }

    let result = {
        operation: 'mode',
        numsq: numsQuery,
        numsarr: numsArr,
        result: findMode(numsArr)
    }

    return res.send(result);
})




// // // // // // // // // ERROR HANDLING // // // // // // // // //
app.use((req, res, next) => {
    const err = new ExpressError("Not Found",404);
  
    return next(err);
  });

  

  
app.use((err, req, res, next) => {
    res.status(err.status || 500);

    return res.json({
        error: err,
        message: err.message
    });
});



// // // // // // // // // LISTENERS // // // // // // // // //
app.listen(3000, () => {
    console.log('App Running On Port: 3000')
})