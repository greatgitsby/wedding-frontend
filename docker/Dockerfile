# Use the standard Amazon Linux base, provided by ECR/KaOS
# It points to the standard shared Amazon Linux image, with a versioned tag.
FROM amazonlinux:2
MAINTAINER Trey Moen

# Framework Versions
ENV VERSION_NODE_8=8.12.0
ENV VERSION_NODE_10=10.16.0
ENV VERSION_NODE_12=12
ENV VERSION_NODE_DEFAULT=$VERSION_NODE_12
ENV VERSION_RUBY_2_4=2.4.6
ENV VERSION_RUBY_2_6=2.6.3
ENV VERSION_BUNDLER=2.0.1
ENV VERSION_RUBY_DEFAULT=$VERSION_RUBY_2_4
ENV VERSION_HUGO=0.75.1
ENV VERSION_YARN=1.22.0
ENV VERSION_AMPLIFY=5.3.0

# UTF-8 Environment
ENV LANGUAGE en_US:en
ENV LANG=en_US.UTF-8
ENV LC_ALL en_US.UTF-8

## Install OS packages
RUN touch ~/.bashrc
RUN yum -y update && \
    yum -y install \
        alsa-lib-devel \
        autoconf \
        automake \
        bzip2 \
        bison \
        bzr \
        cmake \
        expect \
        fontconfig \
        git \
        gcc-c++ \
        GConf2-devel \
        gtk2-devel \
        gtk3-devel \
        libnotify-devel \
        libpng \
        libpng-devel \
        libffi-devel \
        libtool \
        libX11 \
        libXext \
        libxml2 \
        libxml2-devel \
        libXScrnSaver \
        libxslt \
        libxslt-devel \
        libyaml \
        libyaml-devel \
        make \
        nss-devel \
        openssl-devel \
        openssh-clients \
        patch \
        procps \
        python3 \
        python3-devel \
        readline-devel \
        sqlite-devel \
        tar \
        tree \
        unzip \
        wget \
        which \
        xorg-x11-server-Xvfb \
        zip \
        zlib \
        zlib-devel \
    yum clean all && \
    rm -rf /var/cache/yum

## Install Hugo
RUN wget https://github.com/gohugoio/hugo/releases/download/v${VERSION_HUGO}/hugo_${VERSION_HUGO}_Linux-64bit.tar.gz && \
tar -xf hugo_${VERSION_HUGO}_Linux-64bit.tar.gz hugo -C / && \
mv /hugo /usr/bin/hugo && \
rm -rf hugo_${VERSION_HUGO}_Linux-64bit.tar.gz

## Install dotnet sdk and host 3.1
RUN rpm -Uvh https://packages.microsoft.com/config/centos/7/packages-microsoft-prod.rpm
RUN yum -y install dotnet-host-3.1.4
RUN yum -y install dotnet-sdk-3.1

## Install amazon dotnet tools
RUN dotnet tool install -g Amazon.Lambda.Tools
RUN dotnet tool install -g Amazon.Lambda.TestTool-3.1

## Install python3.8
RUN wget https://www.python.org/ftp/python/3.8.0/Python-3.8.0.tgz
RUN tar xvf Python-3.8.0.tgz
WORKDIR Python-3.8.0
RUN ./configure --enable-optimizations --prefix=/usr/local
RUN make altinstall

## Install Node 16
RUN /bin/bash -c "curl --silent --location https://rpm.nodesource.com/setup_16.x | bash - && yum -y install nodejs"
RUN /bin/bash -c "npm i -g yarn"

ENV PATH /usr/local/rvm/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin

## Install awscli
RUN /bin/bash -c "pip3.8 install awscli && rm -rf /var/cache/apk/*"

## Install SAM CLI
RUN /bin/bash -c "pip3.8 install aws-sam-cli"

## Installing Cypress
RUN /bin/bash -c "npm install -g --unsafe-perm=true --allow-root cypress"

## Install AWS Amplify CLI for Node 16
RUN /bin/bash -c "npm install -g @aws-amplify/cli@${VERSION_AMPLIFY}"

## Environment Setup
RUN echo export PATH="\
/root/.yarn/bin:\
/root/.config/yarn/global/node_modules/.bin:\
$(python3.8 -m site --user-base)/bin:\
$(python3 -m site --user-base)/bin:\
$PATH" >> ~/.bashrc && \
    echo "export PATH=$PATH:/root/.dotnet/tools" >> ~/.bashrc

ENTRYPOINT [ "bash", "-c" ]