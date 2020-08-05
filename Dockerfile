FROM nginx:1.15.2-alpine

COPY . /app 

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80

ENTRYPOINT ["nginx","-g","daemon off;"]
