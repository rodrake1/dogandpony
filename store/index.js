import Vuex from "vuex";

const createStore = () => {
	return new Vuex.Store({
		state: {
			toast: false,
			offices: [
				{
					title: "Headquarters",
					address: "3456 Dominaria St.",
					name: "Nicol Bolas",
					job: "CEO",
					email: "nicol.bolas@wizards.com",
					phone: "(808) 555-0000"
				},
				{
					title: "Ravnica Office",
					address: "1234 Ravnica St.",
					name: "Jace Beleren",
					job: "Software Engineer",
					email: "jace.beleren@wizards.com",
					phone: "(808) 555-1111"
				},
				{
					title: "Innistrad Office",
					address: "5678 Innistrad St.",
					name: "Sorin Markov",
					job: "Project Manager",
					email: "sorin.markov@wizards.com",
					phone: "(808) 555-2222"
				},
				{
					title: "Kaladesh Office",
					address: "9012 Kaladesh St.",
					name: "Saheeli Rai",
					job: "Software Tester",
					email: "saheeli.rai@wizards.com",
					phone: "(808) 555-3333"
				}
			]
		},
		mutations: {
			hideToast(state) {
				state.toast = false;
			},
			addOffice(state, office) {
				state.offices.unshift(office);
				state.toast = true;
			},
			updateOffice(state, { office, index }) {
				state.offices[index] = office;
				state.toast = true;
			},
			removeOffice(state, index) {
				state.offices.splice(index, 1);
				state.toast = true;
			}
		}
	});
};

export default createStore;
