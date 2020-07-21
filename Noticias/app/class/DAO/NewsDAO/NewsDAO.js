const Sql = require('./../../Sql/Sql');

class NewsDAO {

    static getAll() {

        return new Promise((res, rej) => {

            let sql = new Sql();

            sql.query(`

                CALL SP_GETALLNEWS

            `).then(results => {

                let response = {};

                results.forEach((news, index) => {

                    let jsonNews = {
                        title: news['TITLE'],
                        news: news['NEWS'],
                        hash: news['HASH']
                    }

                    response[index] = jsonNews;

                });

                res(response);

            }, reject => {

                rej (reject);

            });

        });

    }
    // .getAll

}
// .NewsDAO

module.exports = NewsDAO;