FROM node:19.2-alpine as dependencies

RUN apk add --no-cache alpine-sdk=~1 python3=~3 libtool=~2 autoconf=~2 automake=~1 rust=~1 cargo=~1 cmake=~3 clang15-libs=~15 clang15-dev=~15 clang15=~15 rustfmt=~1 linux-headers
#    adduser -D lisk && \
#    mkdir /home/lisk/build && \
#    chown -R lisk:lisk /home/lisk/ && \
#    npm install -g npm

#USER lisk
#WORKDIR /home/lisk/build
RUN adduser -D lisk && \    
    mkdir /home/lisk/client && \
    mkdir /home/lisk/.lisk && \    
    chown -R lisk:lisk /home/lisk/

USER lisk

WORKDIR /home/lisk
VOLUME ["/home/lisk/.lisk"]


WORKDIR /home/lisk/client
COPY --chown=lisk:lisk . .
RUN npm install
RUN npm run build
##### Stage 2

#FROM node:$NODEJS_VERSION-alpine

#RUN adduser -D lisk && \
#    mkdir /home/lisk/.lisk && \
#    chown -R lisk:lisk /home/lisk/ && \
#    npm install -g npm


#COPY --chown=lisk:lisk ./ .
#COPY --from=builder /home/lisk/build/node_modules/ ./node_modules/

EXPOSE 7887

ENTRYPOINT ["/home/lisk/client/bin/run"]
CMD ["start", "--config=config/default/config.json"]