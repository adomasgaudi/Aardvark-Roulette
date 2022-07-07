// import {onMounted} from 'vue';

// const useCSS = () => {

//   const sheetRules = (() => {

//   })()

//   const returnStyleSheetRules = () => {
//     if (!document.styleSheets[0]) {
//       // Create the <style> tag
//       var style = document.createElement("style");
//       // WebKit hack :(
//       style.appendChild(document.createTextNode(""));
//       // Add the <style> element to the page
//       document.head.appendChild(style);
//     }
//     if (document.styleSheets[0].cssRules) {
//       return function (item:any) {
//         return item.cssRules;
//       };
//     } else if (document.styleSheets[0].rules) {
//       return function (item:any) {
//         return item.rules;
//       };
//     }
//   }
  
  
// const getCSSRule = (search:any, returnArray:any) =>  {
//   let styleSheets = [].map.call(
//     document.styleSheets, 
//     (item) => {
//       return [].slice.call(returnStyleSheetRules(item:any));
//     }
//   );

//   let rule = null;
//   let rules = [] as any[];
//   styleSheets.forEach(function (thisSheet) {
//     let findTheRule = thisSheet.filter(function (rule:any) {
//       if (rule.selectorText) {
//         return (
//           rule.selectorText.lastIndexOf(search) === 0 &&
//           search.length === rule.selectorText.length
//         );
//       } else return false;
//     });

//     if (findTheRule.length) {
//       rules = rules.concat(findTheRule);
//       rule = findTheRule[findTheRule.length - 1]; //findTheRule will contain all rules that reference the selector. findTheRule[findTheRule.length-1] contains the last rule.
//     }
//   });
//   if (rule) {
//     if (returnArray) {
//       return rules;
//     } else {
//       return rule;
//     }
//   } else {
//     let sheet = document.styleSheets[0]; //if the rule we are looking for doesn't exist, we create it
//     var pos = sheet.cssRules.length;
//     if ("insertRule" in sheet) {
//       sheet.insertRule(search + "{  }", pos);
//     } else if ("addRule" in sheet) {
//       sheet.addRule(search, "", pos);
//     }
//     if (returnArray) {
//       return returnStyleSheetRules(document.styleSheets[0]);
//     } else {
//       return returnStyleSheetRules(document.styleSheets[0])[pos];
//     }
//   }
// }


// const css = (find) => (apply) => {
    
//   const { getCSSRule } = useCSS()

//   const extract = (str) => {
//         const start = str.indexOf('{') + 1
//         const end = str.indexOf('}')
//         return str.substring(start, end)
//       }


//   const rule = getCSSRule(`.${find}`, false)
//   const rule2 = getCSSRule(`.${apply}`, false)

//   console.log(extract(rule2.cssText));
  

//   const ruleCSS = rule2.style
//   Object.keys(ruleCSS).forEach((key) => {

    
//     if(ruleCSS[key] !== '') {
//       console.log(ruleCSS[key]);
      
//     }



//   });

//   rule.style.cssText = extract(rule2.cssText)
  


// }




//   return { getCSSRule, returnStyleSheetRules, css, sheet}
// }

// export {useCSS}


// const extract = (str) => {
  //         const start = str.indexOf('{') + 1
  //         const end = str.indexOf('}')
  //         return str.substring(start, end)
  //       }




import {onMounted} from 'vue';

const useCSS = () => {

  const css = (findCls: string) => (innerCss: string) => (callback: any) => {
    document.querySelectorAll(`${findCls}`).forEach((item) => {
      callback(item, innerCss, findCls)
    })
  }
  return { css }
}



export {useCSS}
