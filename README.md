# CI/CD Fun

Projekt demonstrujący przykładowe użycie funkcjonalności CI/CD na githubie

## API

https://ci-cd-back.herokuapp.com/swagger/

## Status

https://ci-cd-front.herokuapp.com ![](https://img.shields.io/website?down_message=asleep&label=frontend&up_color=green&up_message=online&url=https%3A%2F%2Fci-cd-front.herokuapp.com)
https://ci-cd-back.herokuapp.com ![](https://img.shields.io/website?down_message=asleep&label=server&up_color=green&up_message=online&url=https%3A%2F%2Fci-cd-back.herokuapp.com%2Fswagger%2F)

## Deployment

Aplikacja automatycznie automatycznie urachamia deployment przy pull requestach do repozytorium

## Uruchamianie Lokalne

### Ustawienia środowiska

Do uruchmienia aplikacji potrzebne są na maszynie [Node.js](nodejs.org/)
oraz [yarn](https://yarnpkg.com)

### instrukcja odpalania

Sklonuj projekt

```bash
  git clone https://github.com/rimbreaker/ci-cd-fun
```

Przejdź do lkoalizacji frontendu

```bash
  cd web
```

Zainstaluj zależności

```bash
  yarn
```

Wystartuj frontend

```bash
  yarn start
```

Przejdź do lkoalizacji serveru

```bash
  cd server
```

Zainstaluj zależności server

```bash
  yarn
```

Wystartuj server

```bash
  yarn dev
```
