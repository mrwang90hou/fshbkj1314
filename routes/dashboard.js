/**
 * Cong Min @ 蓝山工作室
 */
module.exports = function (app) {
    app.get('/dashboard', function (req, res) {
        // // 通过连接池连接数据库
        // global.dbpool.getConnection(function(err, connection){
        //     // sql语句
        //     var sqls = [
        //         "SELECT COUNT(openid) count FROM we_user;",   //微信用户总量
        //         "SELECT COUNT(openid) count FROM we_user_info;",  //校园绑定用户量
        //         "SELECT DATE_FORMAT(create_time,'%Y-%m-%d') days,COUNT(openid) count FROM we_user WHERE is_bind=1 GROUP BY days;",  //每日新绑定量
        //         "SELECT DATE_FORMAT(last_time,'%Y-%m-%d') days,COUNT(openid) count FROM we_user WHERE is_bind=1 GROUP BY days;",    //绑定用户最后活跃日期
        //         "SELECT COUNT(log_id) count FROM we_user_log WHERE appsource='We重邮';",   //接口访问总量
        //         "SELECT DATE_FORMAT(time,'%Y-%m-%d') days,COUNT(openid) count FROM we_user_log WHERE appsource='We重邮' GROUP BY days;",  //每日接口访问量
        //         "SELECT action,COUNT(log_id) count FROM we_user_log WHERE appsource='We重邮' AND openid<>'微信小程序' GROUP BY action ORDER BY count DESC;"    //各接口用户主动访问量
        //    ];
        //     // 查询数据库
        //     connection.query(sqls.join(''), function (error, results, fields) {
        //         connection.release();   // 释放连接池
        //         if (error) throw error;
        //         res.render('dashboard', {
        //             user: {     //用户
        //                 total: results[0][0].count,     //微信用户总量
        //                 bind: results[1][0].count,      //校园绑定用户量
        //                 list: {
        //                     days: results[2],           //每日新绑定量
        //                     active: results[3]          //绑定用户最后活跃日期
        //                 }
        //             },
        //             visit: {    //访问量
        //                 total: results[4][0].count,     //接口访问总量
        //                 list: {
        //                     days: results[5],           //每日接口访问量
        //                     action: results[6]          //各接口用户主动访问量
        //                 }
        //             }
        //         });
        //     });
        // });
        res.render('dashboard', {
            user: {     //用户
                total: 57956,     //微信用户总量
                bind: 34087,      //校园绑定用户量
                list: {
                    days: ["2020-06-17","2020-06-18","2020-06-19","2020-06-20","2020-06-21","2020-06-22","2020-06-23","2020-06-24","2020-06-25","2020-06-26","2020-06-27","2020-06-28","2020-06-29","2020-06-30","2020-07-01","2020-07-02","2020-07-03","2020-07-04","2020-07-05","2020-07-06","2020-07-07","2020-07-08","2020-07-09","2020-07-10","2020-07-11","2020-07-12","2020-07-13","2020-07-14","2020-07-15","2020-07-16","2020-07-17"],           //每日新绑定量
                    active: ["2020-06-17","2020-06-18","2020-06-19","2020-06-20","2020-06-21","2020-06-22","2020-06-23","2020-06-24","2020-06-25","2020-06-26","2020-06-27","2020-06-28","2020-06-29","2020-06-30","2020-07-01","2020-07-02","2020-07-03","2020-07-04","2020-07-05","2020-07-06","2020-07-07","2020-07-08","2020-07-09","2020-07-10","2020-07-11","2020-07-12","2020-07-13","2020-07-14","2020-07-15","2020-07-16","2020-07-17"]          //绑定用户最后活跃日期
                }
            },
            visit: {    //访问量
                total: 5261401,     //接口访问总量
                list: {
                    days: [71956,79143,81435,60466,74065,107499,95516,85750,45619,49996,65664,105354,99324,101617,108046,118640,98782,45106,64803,71345,62575,61983,59695,60599,70496,57722,61024,59109,55770,56222,25884],           //每日接口访问量
                    action: [71956,79143,81435,60466,74065,107499,95516,85750,45619,49996,65664,105354,99324,101617,108046,118640,98782,45106,64803,71345,62575,61983,59695,60599,70496,57722,61024,59109,55770,56222,25884]          //各接口用户主动访问量
                }
            }
        });
    });
};