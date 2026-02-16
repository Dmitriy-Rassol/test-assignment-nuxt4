import type { FooterSection } from "~/types/footer"

export const footerData: Record<string, FooterSection> = {
    catalog: {
        title: 'Каталог',
        links: [
            { name: 'Все бренды', path: '#' },
            { name: 'Nike', path: '#' },
            { name: 'Adidas', path: '#' },
            { name: 'Puma', path: '#' },
            { name: 'New Balance', path: '#' }
        ]
    },
    help: {
        title: 'Помощь',
        links: [
            { name: 'Доставка', path: '#' },
            { name: 'Заказ и оплата', path: '#' },
            { name: 'Обмен и возврат', path: '#' },
            { name: 'F. A. Q.', path: '#' }
        ]
    },
    info: {
        title: 'Информация',
        links: [
            { name: 'Преимущества', path: '#' },
            { name: 'Гарантия и безопасность', path: '#' },
            { name: 'Индивидуальный заказ', path: '#' },
            { name: 'Акции', path: '#' }
        ]
    },
    company: {
        title: 'Компания',
        links: [
            { name: 'О нас', path: '#' },
            { name: 'Блог', path: '#' },
            { name: 'Отзывы', path: '#' },
            { name: 'Контакты', path: '#' }
        ]
    }
}
