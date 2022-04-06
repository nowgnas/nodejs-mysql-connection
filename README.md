# nodejs-mysql-connection

## 테스트 사용법

### mysql 설치

- [참고](https://hiseon.me/linux/ubuntu/ubuntu-mysql-install/)

#### windows

- windows는 [이곳](https://goddaehee.tistory.com/277)을 참고해주세요

#### linux

- install mysql

```shell
sudo apt install -y mysql-server
```

- initialization mysql server

```bash
sudo mysql_secure_installation
```

#### mac os

- install mysql

```shell
brew install mysql
```

- mysql.server start로 서버를 시작해준 후
- initialization mysql server

```bash
mysql_secure_installation
```

- stop server

```bash
mysql.server stop
```

- workbenck 를 설치하면 편하게 사용 가능합니다
- mysql 서버를 열고 이름이 Users인 스키마를 생성 후 사용 가능합니다.

### Users 스키마 생성

- 서버 열기

```shell
mysql -u root -p
```

- 스키마 생성하기

```sql
create database Users;
```

### 프로젝트 시작

1. clone repository

```bash
git clone https://github.com/nowgnas/nodejs-mysql-connection.git
```

2. install package

```bash
yarn install
```

3. start server

```bash
yarn start
```
