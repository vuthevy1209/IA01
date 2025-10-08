# Tic Tac Toe - React Homework

Ứng dụng Tic Tac Toe được xây dựng với React, triển khai đầy đủ các tính năng theo yêu cầu bài tập.

## Các tính năng đã triển khai

### ✅ Feature 1: Hiển thị move hiện tại (1.8 điểm)
- Thay vì hiển thị button cho move hiện tại, app sẽ hiển thị text "You are at move #..."
- Được highlight bằng màu đỏ và font đậm để dễ nhận biết

### ✅ Feature 2: Board sử dụng loops (1.8 điểm)
- Viết lại Board component sử dụng 2 vòng lặp (nested loops) để tạo các ô vuông
- Không hardcode từng ô một
- Code ngắn gọn và dễ bảo trì hơn

### ✅ Feature 3: Toggle sắp xếp moves (1.8 điểm)
- Thêm button để toggle giữa sắp xếp tăng dần (Ascending) và giảm dần (Descending)
- Hiển thị icon mũi tên để người dùng dễ hiểu
- Có styling đẹp mắt

### ✅ Feature 4: Highlight ô thắng cuộc và hiển thị hòa (1.8 điểm)
- Khi có người thắng, 3 ô tạo nên chiến thắng sẽ được highlight màu xanh lá
- Có animation pulse khi highlight
- Khi hòa (draw), hiển thị message "Draw! No one wins."

### ✅ Feature 5: Hiển thị vị trí (row, col) (1.8 điểm)
- Mỗi move trong history sẽ hiển thị vị trí dạng (row, col)
- Vị trí được tính từ 0 (0,0 là ô trên cùng bên trái)
- Format: "Go to move #X (row, col)"

## Cách chạy project

### Cài đặt dependencies
```bash
npm install
```

### Chạy development server
```bash
npm start
```

App sẽ mở tại [http://localhost:3000](http://localhost:3000)

### Build cho production
```bash
npm run build
```

## Deployment (1 điểm)

### Cách deploy lên Vercel (Khuyến nghị)

1. **Tạo tài khoản Vercel** (nếu chưa có): https://vercel.com

2. **Cài đặt Vercel CLI**:
```bash
npm install -g vercel
```

3. **Deploy**:
```bash
npm run build
vercel --prod
```

Hoặc đơn giản hơn, push code lên GitHub và:
- Vào https://vercel.com
- Click "New Project"
- Import repository từ GitHub
- Click "Deploy"

### Cách deploy lên Netlify

1. **Build project**:
```bash
npm run build
```

2. **Deploy bằng Netlify CLI**:
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=build
```

Hoặc drag & drop folder `build` vào https://app.netlify.com/drop

### Cách deploy lên GitHub Pages

1. **Cài đặt gh-pages**:
```bash
npm install --save-dev gh-pages
```

2. **Thêm vào package.json**:
```json
{
  "homepage": "https://[username].github.io/[repo-name]",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
  }
}
```

3. **Deploy**:
```bash
npm run deploy
```

## Công nghệ sử dụng

- React 18.2.0
- React Scripts 5.0.1
- CSS3 với animations

## Cấu trúc project

```
src/
  ├── App.js          # Main game logic với tất cả các features
  ├── App.css         # Styling cho game
  ├── index.js        # Entry point
  └── index.css       # Global styles
```

## Ghi chú về điểm số

- Feature 1 (Current move display): 1.8 điểm ✅
- Feature 2 (Board with loops): 1.8 điểm ✅
- Feature 3 (Sort toggle): 1.8 điểm ✅
- Feature 4 (Highlight winning squares + draw): 1.8 điểm ✅
- Feature 5 (Display location): 1.8 điểm ✅
- Deployment: 1 điểm ⏳ (cần deploy)

**Tổng: 10 điểm**
