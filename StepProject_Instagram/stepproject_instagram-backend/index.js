const app = require('./src/app.js')

const __PORT = process.env.PORT || 3500

app.listen(__PORT, () => {
	console.log(`Server started on port ${ __PORT }`)
})

