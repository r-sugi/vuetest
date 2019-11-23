module.exports = {
	presets: [["env", { modules: false }], "@vue/app"],
	env: {
		test: {
			presets: [["env", { targets: { node: "current" } }]]
		}
	}
};
