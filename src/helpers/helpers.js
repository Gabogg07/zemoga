
export const sortByFavorite = (toOrder) => {
    let sortHelper = toOrder
    sortHelper.sort((a, b)=>{
      if(a.status === 'FAVORITE') return -1
      if(b.status === 'FAVORITE') return 1
      return 0
    })
    return sortHelper
}

export const changePostStatus = (postId, newStatus, posts) => {
    let index = posts.findIndex((element)=>{
      return  element.id === postId
    })
    let newArray = posts
    newArray[index].status = newStatus
    return [...newArray]
  }