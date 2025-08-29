# Base image com JDK 11
FROM openjdk:11-jdk

# Variáveis de ambiente Android SDK
ENV ANDROID_SDK_ROOT /opt/android-sdk
ENV PATH $ANDROID_SDK_ROOT/cmdline-tools/latest/bin:$ANDROID_SDK_ROOT/platform-tools:$PATH

# Instalar ferramentas básicas
RUN apt-get update && apt-get install -y unzip wget git curl gradle

# Baixar e instalar Android SDK Command Line Tools
RUN mkdir -p $ANDROID_SDK_ROOT/cmdline-tools \
    && cd $ANDROID_SDK_ROOT/cmdline-tools \
    && wget https://dl.google.com/android/repository/commandlinetools-linux-9477386_latest.zip -O cmdline-tools.zip \
    && unzip cmdline-tools.zip -d latest \
    && rm cmdline-tools.zip

# Aceitar licenças do Android SDK
RUN yes | sdkmanager --licenses

# Instalar pacotes necessários
RUN sdkmanager "platform-tools" "platforms;android-35" "build-tools;35.0.0"

# Diretório do app
WORKDIR /app

# Copiar package.json e instalar dependências
COPY package*.json ./
RUN npm install --force

# Copiar todo o código
COPY . .

# Limpar builds antigos
RUN cd android && ./gradlew clean

# Build release APK
RUN cd android && ./gradlew assembleRelease

# Build release AAB (opcional)
# RUN cd android && ./gradlew bundleRelease

# Diretório final do APK/AAB
# APK: android/app/build/outputs/apk/release/
# AAB: android/app/build/outputs/bundle/release/
