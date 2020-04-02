class SosisterApi {
  trendingRecipesData = [
    {
     id: 1,
     title: 'Рыба с руками',
     image: 'https://static.1000.menu/img/content/17649/krasnaya-ryba-v-folge-v-duxovke_1479186670_0_max.jpg', 
     category: 'Рыба', 
     score: 3, 
     description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt magni qui cum? Veritatis consequuntur optio ea inventore aperiam velit maxime eveniet nobis magni non libero veniam dolorem sed nemo, illum enim unde amet exercitationem dicta. Ut hic obcaecati molestias, nostrum assumenda dignissimos facilis deleniti quis nulla, ratione cum labore vitae!', 
     owner: 'John Petrov', 
     likes: '23', 
     cooktime: '21'
    },
    {
      id: 2,
      title: 'Гусь с ногами',
      image: 'https://static.1000.menu/img/content/6685/gus-v-duhovke-s-yablokami_1498545352_9_max.jpg', 
      category: 'Мясо', 
      score: 4, 
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt magni qui cum? Veritatis consequuntur optio ea inventore aperiam velit maxime eveniet nobis magni non libero veniam dolorem sed nemo, illum enim unde amet exercitationem dicta. Ut hic obcaecati molestias, nostrum assumenda dignissimos facilis deleniti quis nulla, ratione cum labore vitae!', 
      owner: 'John Petrov', 
      likes: '3', 
      cooktime: '121'
     },
     {
      id: 3,
      title: 'Мороженое',
      image: 'https://cdn.lifehacker.ru/wp-content/uploads/2019/05/Depositphotos_68972477_xl-2015_1559126153-e1559129205144-630x315.jpg', 
      category: 'Десерты', 
      score: 5, 
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt magni qui cum? Veritatis consequuntur optio ea inventore aperiam velit maxime eveniet nobis magni non libero veniam dolorem sed nemo, illum enim unde amet exercitationem dicta. Ut hic obcaecati molestias, nostrum assumenda dignissimos facilis deleniti quis nulla, ratione cum labore vitae!', 
      owner: 'John Petrov', 
      likes: '123', 
      cooktime: '15'
     },
  ];

  topCategoriesData = [
    {id: 1, title: 'Пиво', count: 214},
    {id: 2, title: 'Рыбка', count: 34},
    {id: 3, title: 'И', count: 56},
    {id: 4, title: 'Селедка', count: 4}
  ]

  getTrendingRecipes = ()=> {
    return new Promise( (resolve) => {
      setTimeout( () => resolve(this.trendingRecipesData), 200)
    })
  }

  getTopCategories = () => {
    return new Promise( (resolve) => {
      setTimeout( () => resolve(this.topCategoriesData), 1258)
    } );
  }
}

export default SosisterApi;