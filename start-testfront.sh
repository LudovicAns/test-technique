echo 'Start' >> README.md
git add README.md
git commit -m "Start test"
mkdir test-front
cd ./test-front/
npx create-react-app react-app
cd ./react-app/
npm install react-router-dom
npm start
