-- CreateTable
CREATE TABLE "Assuntos" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "termo" TEXT NOT NULL,
    "cont_quantidade" INTEGER NOT NULL DEFAULT 0
);
