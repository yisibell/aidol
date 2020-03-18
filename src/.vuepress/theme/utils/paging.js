/**
*@author: hongwenqing
*@date: 2020-03-18
*@desc: 分页生成器函数
*/
export default (
  origin , // 源数据
  { // 分页参数
    currentPage, // 当前页码
    pageSize // 每页条数
  } = {
    currentPage: 0,
    pageSize: 0,
  },
  condition // 过滤条件

) => {

  origin = !origin ? [] : origin

  let start_index = ( currentPage - 1 ) * pageSize,
      end_index = start_index + pageSize,
      originTotal = origin.length,  // origin total data
      data = [],
      total = 0,
      isAllConditionNull = !condition || condition.every( v => v.value === '' || v.value === null ); // 是否存在有效过滤条件

  // get all origin data when all condition is null character string.
  if ( isAllConditionNull ){
    data = currentPage && pageSize ? origin.slice( start_index , end_index ) : origin
    total = origin.length
  } else {
    // filter data
    let filterArr = origin.filter( ori => {

      let valids = {};

      condition.forEach( v => {
        let o = {}
        valids[v.key] = true
      })

      for ( let k in valids ){

        if ( valids.hasOwnProperty(k) ){

          let curr = condition.find( v => v.key === k )  // 某条件信息对象

          if ( curr.daterange ){  // 日期范围

            let start = +new Date( curr.value ? curr.value[0] : 0 ),
                end = +new Date( curr.value ? curr.value[1] : 0 ),
                now = +new Date( ori[k] );

            valids[k] = (start <= now && end >= now) || !start

          }else{  // 模糊、全匹配

            valids[k] = (curr.fuzzy ? ori[k].search( curr.value ) !== -1 : ori[k] == curr.value) || curr.value == ''

          }

        }

      }

      
      for ( let k in valids ) if( !valids[k] ) return false

      return true

    })

    // pagination data from condition filter
    data = currentPage && pageSize ? filterArr.slice( start_index , end_index ) : filterArr
    // pagination total data
    total = data.length  
  }
    
  return {
    total,
    originTotal,
    data,
    currentPage,
    pageSize,
  }


}