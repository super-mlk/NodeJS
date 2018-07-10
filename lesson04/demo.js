// 非阻塞好难懂


// 阻塞处理
// function updb1() {
//     var start = new Date().getTime();
//     while (new Date().getTime() < start + 3000);
// }
// updb1();
//数据库更新完毕
// console.log("updb1 success");
// console.log("I like javascript");


// 非阻塞处理


function updb2(done) {
    setTimeout(() => {
        done();
    }, 3000)
}

updb2(function () {
    //数据库更新完毕
    console.log("updp2 success.");
});

console.log("I like node.js");

