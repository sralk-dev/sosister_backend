class SosisterApi {
  trendingRecipesData = [
    {
     id: 1,
     title: 'Рыба с руками',
     image: 'https://russiaedu.ru/media/cache/image_md_resize/uploads/upload-images/2019/12/05/b_img5de908746e39d3.43406923.jpg', 
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
     {
      id: 5,
      title: 'Мороженое Мороженое Мороженое Мороженое Мороженое',
      image: 'https://kidpassage.com/images/publications/eda-sankt-peterburge-chto-poprobovat-skolko-stoit/cover_original.jpg', 
      category: 'Десерты', 
      score: 5, 
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt magni qui cum? Veritatis consequuntur optio ea inventore aperiam velit maxime eveniet nobis magni non libero veniam dolorem sed nemo, illum enim unde amet exercitationem dicta. Ut hic obcaecati molestias, nostrum assumenda dignissimos facilis deleniti quis nulla, ratione cum labore vitae!', 
      owner: 'John Petrov', 
      likes: '123', 
      cooktime: '15'
     }
  ];

  topCategoriesData = [
    {id: 1, title: 'Пиво', count: 214},
    {id: 2, title: 'Рыбка', count: 34},
    {id: 3, title: 'И', count: 56},
    {id: 4, title: 'Селедка', count: 4}
  ];

  latestRecipes = [
    {
      id: 1,
      title: 'Рыба с руками',
      image: 'https://russiaedu.ru/media/cache/image_md_resize/uploads/upload-images/2019/12/05/b_img5de908746e39d3.43406923.jpg', 
      category: 'Рыба', 
      owner: 'John Petrov', 
     },
     {
      id: 2,
      title: 'Мороженое',
      image: 'https://cdn.lifehacker.ru/wp-content/uploads/2019/05/Depositphotos_68972477_xl-2015_1559126153-e1559129205144-630x315.jpg', 
      category: 'Десерты', 
      owner: 'John Petrov', 
     },
     {
      id: 3,
      title: 'Рыwfqwqfми',
      image: 'https://russiaedu.ru/media/cache/image_md_resize/uploads/upload-images/2019/12/05/b_img5de908746e39d3.43406923.jpg', 
      category: 'Рыба', 
      owner: 'John Petrov', 
     },
     {
      id: 4,
      title: 'Жирная шняга',
      image: 'https://www.gastronom.ru/binfiles/images/20180629/bec2ae2d.jpg', 
      category: 'Рыба', 
      owner: 'John Petrov', 
     },
     {
      id: 5,
      title: 'Полезная шняга',
      image: 'https://ichef.bbci.co.uk/news/410/cpsprodpb/41F7/production/_105278861_gettyimages-855098134.jpg', 
      category: 'Десерты', 
      owner: 'John Petrov', 
     },
  ];

  detailRecipe = {
    id: 1,
    title: 'Рыба с руками',
    images: [
      'https://russiaedu.ru/media/cache/image_md_resize/uploads/upload-images/2019/12/05/b_img5de908746e39d3.43406923.jpg',
      'https://cdn.lifehacker.ru/wp-content/uploads/2019/05/Depositphotos_68972477_xl-2015_1559126153-e1559129205144-630x315.jpg',
      'https://ichef.bbci.co.uk/news/410/cpsprodpb/41F7/production/_105278861_gettyimages-855098134.jpg'
    ],
    category: 'Рыба', 
    score: 3, 
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt magni qui cum? Veritatis consequuntur optio ea inventore aperiam velit maxime eveniet nobis magni non libero veniam dolorem sed nemo, illum enim unde amet exercitationem dicta. Ut hic obcaecati molestias, nostrum assumenda dignissimos facilis deleniti quis nulla, ratione cum labore vitae!', 
    owner: 'John Petrov', 
    likes: '23', 
    cooktime: '21',
    preptime: '12',
    serving: '24',
    views: '24125',
    ingredients: [
      {id: 100, name: '100 гр колбасы'},
      {id: 101, name: '643 мл самогонки'},
      {id: 102, name: '15 гр веры в бога'},
      {id: 103, name: '1 кг оленя'},
      {id: 104, name: 'грунтовая вода'},
      {id: 105, name: '140 шт пачек от анчоусов'},
    ],
    steps: [
      {id:10001, order:1, time: 5, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
      {id:10002, order:2, time: 23, description: 'Lorem ipsum dolor sit amet '},
      {id:10003, order:3, time: 17, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.'},
    ]
  };
  
  categories = [
    {id: 1, title: 'Курица', recipeNums: 212, image: 'https://www.obed.ru/images/suppliers/restaurants/food/666_big.1537351715.jpg'},
    {id: 2, title: 'HashChangeEven', recipeNums: 12, image: 'https://avatars.mds.yandex.net/get-zen_doc/108343/pub_5d5813ab998ed600ae726837_5d581441f0d4f400ae21b636/scale_1200'},
    {id: 3, title: 'Ананас', recipeNums: 65, image: 'https://avatars.mds.yandex.net/get-pdb/236760/a899089c-2536-4e40-a034-430957c5c43e/s1200?webp=false'},
    {id: 4, title: 'Петр', recipeNums: 24372, image: 'https://www.2m5.ru/images/2019/08/11/wfPI.jpg'},
  ]

  recipesData = [
    {
     id: 1,
     title: 'Рыба с руками',
     image: 'https://www.2m5.ru/images/2019/08/11/wfPI.jpg', 
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
      image: 'https://www.obed.ru/images/suppliers/restaurants/food/666_big.1537351715.jpg', 
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
      image: 'https://cdn.iz.ru/sites/default/files/styles/1920x1080/public/article-2019-11/Depositphotos_11002885_xl-2015.jpg?itok=R2_SQjfd', 
      category: 'Десерты', 
      score: 5, 
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt magni qui cum? Veritatis consequuntur optio ea inventore aperiam velit maxime eveniet nobis magni non libero veniam dolorem sed nemo, illum enim unde amet exercitationem dicta. Ut hic obcaecati molestias, nostrum assumenda dignissimos facilis deleniti quis nulla, ratione cum labore vitae!', 
      owner: 'John Petrov', 
      likes: '123', 
      cooktime: '15'
     },
     {
      id: 4,
      title: 'Мороженое',
      image: 'https://images.aif.ru/017/670/9a6e8711e058b9c97bcbe0ef1061c82c.jpg', 
      category: 'Десерты', 
      score: 5, 
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt magni qui cum? Veritatis consequuntur optio ea inventore aperiam velit maxime eveniet nobis magni non libero veniam dolorem sed nemo, illum enim unde amet exercitationem dicta. Ut hic obcaecati molestias, nostrum assumenda dignissimos facilis deleniti quis nulla, ratione cum labore vitae!', 
      owner: 'John Petrov', 
      likes: '123', 
      cooktime: '15'
     },
     {
      id: 5,
      title: 'Мороженое Мороженое Мороженое Мороженое Мороженое',
      image: 'https://kidpassage.com/images/publications/eda-sankt-peterburge-chto-poprobovat-skolko-stoit/cover_original.jpg', 
      category: 'Десерты', 
      score: 5, 
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt magni qui cum? Veritatis consequuntur optio ea inventore aperiam velit maxime eveniet nobis magni non libero veniam dolorem sed nemo, illum enim unde amet exercitationem dicta. Ut hic obcaecati molestias, nostrum assumenda dignissimos facilis deleniti quis nulla, ratione cum labore vitae!', 
      owner: 'John Petrov', 
      likes: '123', 
      cooktime: '15'
     },
     {
      id: 6,
      title: 'Рыба с руками',
      image: 'https://www.2m5.ru/images/2019/08/11/wfPI.jpg', 
      category: 'Рыба', 
      score: 3, 
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt magni qui cum? Veritatis consequuntur optio ea inventore aperiam velit maxime eveniet nobis magni non libero veniam dolorem sed nemo, illum enim unde amet exercitationem dicta. Ut hic obcaecati molestias, nostrum assumenda dignissimos facilis deleniti quis nulla, ratione cum labore vitae!', 
      owner: 'John Petrov', 
      likes: '23', 
      cooktime: '21'
     }
  ];

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

  getLatestRecipes = () => {
    return new Promise( (resolve) => {
      setTimeout( () => resolve(this.latestRecipes), 2201)
    });
  }

  getDetailRecipe = () => {
    return new Promise( (resolve) => {
      setTimeout( () => resolve(this.detailRecipe), 2134)
    })
  }

  getCategories = () => {
    return new Promise ( (resolve) => {
      setTimeout( () => resolve(this.categories), 1000)
    })
  }

  getRecipes = () => {
    return new Promise ( (resolve) => {
      setTimeout( () => resolve(this.recipesData), 500)
    })
  }
}

export default SosisterApi;