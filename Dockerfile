FROM node:12.19.0-alpine

# set app serving to permissive / assigned
ENV HOST 0.0.0.0

ARG API_URL

ENV API_URL=$API_URL
# EXAMPLE URL: http://adab.ga:8080
#ENV NODE_ENV=production

ENV NUXT_HOST=0.0.0.0

# update and install dependency
RUN apk add yarn

WORKDIR /app
ADD ./ /app

# Add ci dep
#RUN yarn add codecov

# install package
RUN yarn install --frozen-lockfile
#RUN yarn build

# expose 3000 on container
EXPOSE 3000

# start command
CMD [ "yarn", "dev" ]
#CMD [ "yarn", "start" ]
