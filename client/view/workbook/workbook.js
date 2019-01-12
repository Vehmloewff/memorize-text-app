import Workbook from './Workbook.html'

export default mediator => ({
	name: `workbook`,
	defaultChild: `select-sheet`,
	route: `workbook/:key`,
	template: Workbook,
	async resolve(data, { key }) {
		const workbook = await mediator.call(`getWorkbook`, key)

		return {
			workbook,
			key,
		}
	},
})