-- CreateTable
CREATE TABLE "Assunto" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "termo" TEXT NOT NULL,
    "cont_quantidade" INTEGER NOT NULL DEFAULT 0
);

-- CreateIndex
CREATE UNIQUE INDEX "Assunto_termo_key" ON "Assunto"("termo");
