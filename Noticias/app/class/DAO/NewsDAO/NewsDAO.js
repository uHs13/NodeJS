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
                        author: news['AUTHOR'],
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

    static get(id = '65264448-cb34-11ea-a4ca-80ee737c3779') {

        return new Promise((res, rej) => {

            let sql = new Sql();

            sql.query(`

                CALL SP_GETNEWS(?)

            `, [

                id

            ]).then(results => {

                let jsonNews = {

                    title: results['0']['TITLE'],
                    author: results['0']['AUTHOR'],
                    news: results['0']['NEWS'],
                    hash: results['0']['HASH']

                }

                res(jsonNews);

            }, reject => {

                rej (reject);

            });

        });

    }
    // .get

    static save(newsData) {

        return new Promise((res, rej) => {

            let sql = new Sql();

            sql.query(`

                CALL SP_INSERTNEWS(?, ?, ?)

            `, [

                newsData.title,
                newsData.author,
                newsData.news

            ]).then(results => {

                res(true);

            }, reject => {

                rej (reject);

            });

        });

    }
    // .save

}
// .NewsDAO

module.exports = NewsDAO;