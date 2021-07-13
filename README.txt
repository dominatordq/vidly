This simulates an application that would run in a video store, called Vidly.

MUST set a private/secret key to environment variable: export/set vidly_jwtPrivateKey=<some key>

To run the program, type 'npm start' in a terminal under the main repository folder

Heroku details:
- Path to the app: https://young-wave-66889.herokuapp.com/
- Heroku Git repo: https://git.heroku.com/young-wave-66889.git
- To push to Heroku repo: git push heroku master
- To set private key (ENV variable): heroku config:set vidly_jwtPrivateKey=1234
- To set node environment to production: heroku config:set NODE_ENV=production
- To see all environment variables: heroku config
- To set database to Atlas: heroku config:set vidly_db=[uri]

MongoDB Atlas details:
- Cluster name: vidly
- Database user, pass: vidlyuser, 1234
