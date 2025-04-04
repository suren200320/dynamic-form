# 🎡 Vue Fortune Wheel Component

This is a fully reactive and interactive **Fortune Wheel** built with Vue 3, TypeScript, and the Canvas API. The component renders a spin wheel with prizes, handles secret interactions, shows reward modals, tracks free spins, and draws everything dynamically using Canvas. No external rendering libraries—just Vue reactivity and vanilla Canvas.

---

## 🚀 Features

- Canvas-rendered spinning wheel with prizes
- Free spin countdown timer using `setInterval`
- Secret reward interaction via `canvas click` detection
- Reward result modal popup
- Bonus modal when clicking on hidden prizes
- Image preloading and caching for smooth performance
- Clean, modular, and fully reactive logic using Vue 3's `<script setup lang="ts">`

---

## 🧱 Installation

```bash
npm install
```

## 🔩 How It Works (Functional Overview)

1. ### Data Setup & Imports
- Prize data is either fetched from API or mocked using generateMockFortuneData().
- Icons are preloaded using loadImage() and stored in a reactive Map (imagesCache) for fast access.

2. ### Canvas Setup
- A canvas ref is bound to the template. In onMounted(), its context (ctx) is used for all drawings.
- The wheel is drawn segment by segment using drawWheel() and drawSegment() methods.
- Icons are centered using drawIcon(), and text is rendered below using drawText().

3. ### Spin Mechanics
- startSpin() triggers the rotation using requestAnimationFrame.
- The angle increases over time using easing (easeOutSine), giving a smooth spin.
- getRandomAngle() ensures fair randomness per spin.

4. ### Result Detection
- After spinning, getRewardByAngle() maps the angle to the prize based on the total number of segments.
- If the reward is secret (is_secret === true), showSecretModal() is called instead.

5. ### Image Caching
- loadImages() is called once, and it uses loadImage() to preload each icon.
- The Cache API is used to store images for performance and offline support.

6. ### Click Detection
- handleCanvasClick() adds an event listener to check where the user clicked.
- If a user clicks on a secret prize area (calculated via angle and radius), it triggers a special interaction/modal.

##  🔩 Как Это Работает (Функциональный Обзор)
1. ### Подготовка Данных и Импорты
- Данные о призах получаются с API или создаются с помощью generateMockFortuneData().
- Иконки загружаются заранее с помощью loadImage() и сохраняются в реактивной карте (imagesCache) для быстрого доступа.

2. ### Настройка Canvas
- Ссылка на canvas привязывается к шаблону. В onMounted() используется его контекст (ctx) для всех отрисовок.
- Колесо рисуется по сегментам с помощью методов drawWheel() и drawSegment().
- Иконки размещаются по центру с помощью drawIcon(), а текст отображается ниже с помощью drawText().

3. ### Механика Вращения
- startSpin() запускает анимацию вращения через requestAnimationFrame.
- Угол увеличивается со временем с использованием плавного замедления (easeOutSine), создавая плавный эффект вращения.
- getRandomAngle() обеспечивает случайность при каждом вращении.

4. ### Определение Результата
- После вращения метод getRewardByAngle() сопоставляет текущий угол с призом на основе общего количества сегментов.
- Если приз секретный (is_secret === true), вызывается showSecretModal().

5. ### Кэширование Изображений
- loadImages() вызывается один раз и использует loadImage() для предварительной загрузки каждой иконки.
- Используется API кэша для хранения изображений с целью повышения производительности и поддержки оффлайн-доступа.

6. ### Обработка Клика
- handleCanvasClick() добавляет обработчик события для проверки координат клика пользователя.
- Если пользователь нажимает на область секретного приза (вычисляется по углу и радиусу), запускается специальное взаимодействие или модальное окно.







