const __DATASOURCE_USER = process.env.DATASOURCE_USER || 'User'
const __DATASOURCE_PASSWORD = process.env.DATASOURCE_PASSWORD || 'V2xlKjA379sdVH8y'
const __DATASOURCE_DBNAME = process.env.DATASOURCE_DBNAME || 'data_base'

module.exports = {
  __DATASOURCE_URL: `mongodb+srv://${ __DATASOURCE_USER }:${ __DATASOURCE_PASSWORD }@cluster0.31389.mongodb.net/${ __DATASOURCE_DBNAME }?retryWrites=true&w=majority`,
  __TOKEN_SIGNATURE: `nCvy8fnxceaYcdTT`
}
