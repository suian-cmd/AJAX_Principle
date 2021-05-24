console.log('hello world 1')

getCSS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open("GET", '/style.css')   // 初始化一个请求
    request.onreadystatechange = () => {
        console.log(request.readyState)
        // request.readyState === 4  请求完成 
        // 但不知道是成功 2xx   还是失败 4xx 5xx
        if(request.readyState === 4){
            if(request.status >= 200 & request.status < 300){
                // 创建 style 标签
                const style = document.createElement('style')
                style.innerHTML = request.response
                document.head.appendChild(style)
            }else {
                alert('加载 CSS 失败')
            }
        }
    }
    request.send();     // 发送请求
}

getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/2.js')
    request.onreadystatechange = () => {
        if(request.readyState === 4){
            if(request.status >=200 && request.status < 300){
                const script = document.createElement('script')
                script.innerHTML = request.response
                document.body.appendChild(script)
            }else{
                alert('加载 JS 失败')
            }
        }
    }
    request.send()
}

getHTML.onclick = () => {
    const request = new XMLHttpRequest()    // readyState  === 0
    request.open('GET', '/3.html')          // readyState  === 1
    request.onreadystatechange = () => {
        if(request.readyState === 4){
            if(request.status >=200 && request.status < 300){
                const div = document.createElement('div')
                div.innerHTML = request.response
                document.body.appendChild(div)
            }else{
                alert('加载 HTML 失败')
            }
        }
    }
    //readyState === 2 已经调用send； readyState ===3 正在下载内容  
    //readyState === 4 下载完成
    request.send()  
}

getXML.onclick = () => {
    //console.log('11')
    const request = new XMLHttpRequest()    // readyState  === 0
    request.open('GET', '/4.xml')          // readyState  === 1
    request.onreadystatechange = () => {
        if(request.readyState === 4){
            if(request.status >=200 && request.status < 300){
                const dom = request.responseXML   // request.responseXML 返回对就是一个dom对象
                const text = dom.getElementsByTagName("warning")[0].textContent
                console.log(text.trim())
            }else{
                alert('加载 XML 失败')
            }
        }
    }
    //readyState === 2 已经调用send； readyState ===3 正在下载内容  
    //readyState === 4 下载完成
    request.send()  
}

getJSON.onclick = () => {
    //console.log('11')
    const request = new XMLHttpRequest()    // readyState  === 0
    request.open('GET', '/5.json')          // readyState  === 1
    request.onreadystatechange = () => {
        if(request.readyState === 4){
            if(request.status >=200 && request.status < 300){
                //console.log(typeof request.response)
                const object = JSON.parse(request.response)   // request.responseXML 返回对就是一个dom对象
                //console.log(typeof object)
                myName.innerHTML = object.name
                //console.log(object)
            }else{
                alert('加载 JSON 失败')
            }
        }
    }
    //readyState === 2 已经调用send； readyState ===3 正在下载内容  
    //readyState === 4 下载完成
    request.send()  
}

let n = 1

getPage.onclick = () => {
    if( n >= 3){
        return
    }
    const request = new XMLHttpRequest()
    request.open('GET', `/page${n + 1}`)
    request.onreadystatechange = () =>{
        if(request.readyState === 4){
            if(request.status >=200 && request.status < 300){
                const array = JSON.parse(request.response)
                array.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = item.id
                    xxx.appendChild(li)
                })
                n += 1
            }
        }
    }
    request.send()
}


// getCSS.onclick = () => {
//     const request = new XMLHttpRequest();
//     request.open("GET", '/style.css')   // 初始化一个请求
//     request.onload = () => {
//         console.log(request.response)

//         const style =document.createElement('style')
//         style.innerHTML = request.response
//         document.head.appendChild(style)
//     }
//     request.onerror = () =>{    // request.onerror方法无法使用
//         console.log('失败了')     
//     }
//     request.send();     // 发送请求
// }