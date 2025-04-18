# 第二阶段：运行时镜像
FROM alpine:3.18

ARG ARCH
RUN apk add --no-cache bash jq

COPY ./docker/build/$ARCH/enreachd /enreach-chain/
COPY ./docker/build/$ARCH/config/ /enreach-chain/config-default/

RUN mkdir -p /enreach-chain/config \
    /enreach-chain/data \
    /enreach-chain/logs

COPY ./docker/start.sh /enreach-chain/

WORKDIR /enreach-chain/
ENTRYPOINT ["./start.sh"]