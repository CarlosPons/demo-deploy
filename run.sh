cd /Documentos/workspace/Angular7CRUDExample/
ng build --prod
cd /Documentos/workspace/demo-deploy/
cd www
rm -rf *
cp -r ../../Angular7CRUDExample/dist/angular7crud/* .
cd ..
git add .
git commit -m "Version n"
git push
