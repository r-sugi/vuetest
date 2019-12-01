// TODO: vue component
// async mounted() {
//   const params: ILoadContainerUseCase = {
//     productRepository: new ProductRepository(),
//     request: this.productsParams,
//     errorService: new errorService({ context: "mounting users" })
//   };
//   await new LoadContainerUseCase(params).execute();
// }

// // usecase
// export default class LoadContainerUseCase {
//   constructor({ productRepository, request, errorService }) {
//     this.productRepository = productRepository
//     this.request = request
//     this.errorService = errorService
//   }

//   async execute() {
//     try {
//       const data = await this.productRepository.fetchItems(this.request)
//       this.productRepository.saveItems(data)
//     } catch(e) {
//       await this.errorService.handle(e)
//     }
//     return
//   }
// }

// // repository
// export default class UserRepository {
//   constructor() {}
//   async fetchUser(id) {
//     return await APIClient.shared.request(new ProductAPI.GetProduct(id))
//   }
//   async fetchItems(params) {
//     return await APIClient.shared.request(new ProductAPI.GetProducts(params))
//   }
//   saveUsers(users) {
//     store.commit(new SaveUsers(users))
//     // TODO: firestore
//   }
//   clearUsers() {
//     store.commit(new ClearUsers())
//   }
// }

// // types
// export const Types = {
//   // SAVE_USER: 'user/save'
//   // CLERT_USER: 'user/clear'
// }
// export class SaveUsers {
//   constructor(){}
// }
// export class ClearUsers {
// }

// const user_configs = {
//   state: {

//   },
//   mutaions: {

//   }
// }

// // vuex store
// import Vuex from 'vuex'
// const store = new Vuex.Store({
//   modules: {
//     user: user_configs,
//   }
// })

