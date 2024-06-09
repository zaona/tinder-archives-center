document.addEventListener('DOMContentLoaded', function () {
    const itemList = document.getElementById('itemList');
    const itemDescription = document.getElementById('itemDescription');

    // 定义列表项数据
    const items = {
        "item1": {
            name: "刘培强",
            bio: "男，军衔中校，生理年龄40岁（因为在太空中进入休眠状态），实际年龄52岁，领航员国际空间站中的中国航天员，机械工程专家航空飞行专业，军人家庭出身，父母早早双亡，为张鹏徒弟。在2044年太空电梯危机中立功，曾参与逐月计划。领航员国际空间站中的中国航天员。因为执行任务，使得孩子的成长过程中缺少陪伴，导致父子关系疏远。2075年2月15日为拯救地球驾驶领航员国际空间站冲击发动机火焰，点燃木星，壮烈牺牲。",
            imageUrl: "/tool/world/img/figure/刘培强.png",
            age: "40"
        },
        "item2": {
            name: "刘启",
            bio: "2050年10月16日出生，男，血型 A型，身高180 cm，体重70 kg，职业工程车辆修理员，星座 天秤座，身份编号：CN0010UG03C11，出生于中华人民共和国北京市。刘培强之子，工程车辆修理员、运载车初级驾驶员。2075年木星引力危机中率领CN171-11救援队重启苏拉威西三号转向发动机并成功点燃木星。",
            imageUrl: "/tool/world/img/figure/刘启.jpg",
            age: "awa"
        },
        "item3": {
            name: "李一一",
            bio: "2048年2月14日出生，中国驻联合政府外交官郝晓晞之子，联合政府(UEG)紧急技术观察员，一线工程师，智商极高。木星危机时，曾隶属CN114-03飞行救援队，执行0051号子任务救援苏拉威西三号转向发动机。2075年2月15日因2075年木星引力危机被CN171-11救援队征召执行恢复苏拉威西三号转向发动机运输火石任务，并试图更改行星发动机程序为“春节十二响”，将苏拉威西三号转向发动机七个发动机的射流过载集中至一个喷射口后抵至最高点点燃木星表层与地球大气混合后的氢氧混合气体，从而使地球脱离地木洛希极限，将地球恢复至正常轨道。最终在刘培强、刘启、何连科、王磊等人的共同努力下任务成功，拯救了地球。",
            imageUrl: "/tool/world/img/figure/李一一.jpg",
            age: "qwq"
        },
    };

    // 更新描述的函数
    function updateItemDescription(selectedItem) {
        const itemData = items[selectedItem];
        itemDescription.innerHTML = `
            <img src="${itemData.imageUrl}" alt="${itemData.name} 图片" class="w-full lg:h-[300px] h-[200px] mb-2 object-cover">
            <p class="text-[36px]">${itemData.name}</p>
            <p class="text-[16px]">${itemData.bio}</p>
            <p class="text-[26px] mt-[32px]">测试小标题</p>
            <p class="text-[16px]">${itemData.age}</p>
            <p class="text-[16px] text-black/50 border px-2 py-2 mt-[32px]">本页面部分或全部文字内容源自地球联合百科（https://unitedearth.wiki），以CC BY-NC-SA 3.0（知识共享 署名-非商业性使用-以相同方式共享 3.0）协议转载。</p>
        `;
    }

    // 自动生成列表
    for (const itemKey in items) {
        if (items.hasOwnProperty(itemKey)) {
            const button = document.createElement('button');
            button.textContent = items[itemKey].name;
            button.classList.add('text-left', 'w-full', 'px-6', 'hover:bg-[#F3F4F6]', 'font-medium', 'py-4');
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