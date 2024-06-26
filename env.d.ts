declare namespace NodeJS {
  interface ProcessEnv {
    POSTGRES_HOST: string;
    POSTGRES_PORT: number;
    POSTGRES_USERNAME: string;
    POSTGRES_PASSWORD: string;
    POSTGRES_DB_NAME: string;
    JWT_SECRET: string;
    DOCKER_CONTAINER_NAME: string;
    DOCKER_PORT: number;
    DOCKER_DB_NAME: string;
    DOCKER_PASSWORD: string;
  }
}
