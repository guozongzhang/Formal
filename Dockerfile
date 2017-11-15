# Statusbar
#
# VERSION    1.0.0

FROM hub.c.163.com/library/node:8.2.1


COPY . /app  
WORKDIR /app

RUN npm install pm2 -g --registry=https://registry.npm.taobao.org

RUN npm install --registry=https://registry.npm.taobao.org

RUN npm run dockerbuild && npm run cdn

EXPOSE 5000

CMD ["npm", "start"] 