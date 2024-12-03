
export function pageLoad() {
    const content = document.querySelector('#content')
    const section = document.createElement('section')
    content.append(section)
    let titles = ['Welcome to Italiano Recardo', 'Our Tuesday Night Special', 'Awarding Winning Establishment'];
    let paragraphs = ['Welcome to our restaurant! Enjoy a delightful dining experience with delicious dishes, warm service, and a cozy atmosphere. We\'re thrilled to have you here!', 'From 6pm onwards every tuesday indulge in our 30% off specials on all pastas & pizzas', 'Check our all of our prestigeous awards'];
        for (let i = 0; i < 3; i++) {
            const div = document.createElement('div');
            div.classList.add(`pageLoadDiv${i + 1}`)
            const h3 =document.createElement('h3');
            h3.textContent = titles[i];
            h3.classList.add(`pageLoadtitle${i + 1}`)
            const p =document.createElement('p');
            p.textContent = paragraphs[i];
            p.classList.add(`pageLoadParagraph${i + 1}`);
            section.append(div);
            div.append(h3, p);
        };
    section.classList.add(`pageLoadSection`);
    content.append(section);
};
