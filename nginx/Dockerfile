FROM nginx:1.17.4-alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d
EXPOSE 9000
ENTRYPOINT ["nginx", "-g", "daemon off;"]
