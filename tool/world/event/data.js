document.addEventListener('DOMContentLoaded', function () {
    const itemList = document.getElementById('itemList');
    const itemDescription = document.getElementById('itemDescription');

    // 定义列表项数据
    const items = {
        "item1": {
            name: "2044太空电梯危机",
            bio: "",
            imageUrl: "/tool/world/img/figure/刘培强.png",
        },
        "item2": {
            name: "2058月球坠落危机",
            bio: "",
            imageUrl: "/tool/world/img/figure/刘启.jpg",
        },
        "item3": {
            name: "2075木星引力危机",
            bio: "",
            imageUrl: "/tool/world/img/figure/李一一.jpg",
        },
        "item4": {
            name: "2078太阳氦闪危机",
            bio: "",
            imageUrl: "/tool/world/img/figure/李一一.jpg",
        },
    };

    // 更新描述的函数
    function updateItemDescription(selectedItem) {
        const itemData = items[selectedItem];
        itemDescription.innerHTML = `
            <img src="${itemData.imageUrl}" alt="${itemData.name} 图片" class="w-full lg:h-[300px] h-[200px] mb-2 object-cover">
            <p class="text-[36px]">${itemData.name}</p>
            <p class="text-[16px]">${itemData.bio}</p>
            <p class="text-[16px] text-gray-500 border px-2 py-2 mt-[32px]">本页面部分或全部文字内容源自地球联合百科（https://unitedearth.wiki），以CC BY-NC-SA 3.0（知识共享 署名-非商业性使用-以相同方式共享 3.0）协议转载。</p>
        `;
    }

    // 自动生成列表
    for (const itemKey in items) {
        if (items.hasOwnProperty(itemKey)) {
            const button = document.createElement('button');
            button.textContent = items[itemKey].name;
            button.classList.add('text-left', 'w-full', 'px-6', 'hover:bg-gray-100', 'font-medium', 'py-4');
            button.dataset.item = itemKey; // 使用data属性存储人物标识

            button.addEventListener('click', function () {
                updateItemDescription(itemKey);
            });

            itemList.appendChild(button);
        }
    }

    updateItemDescription("item1");

    // 使用事件委托处理列表项点击
    itemList.addEventListener('click', function (event) {
        if (event.target.tagName === 'BUTTON') {
            updateItemDescription(event.target.dataset.item);
        }
    });
});