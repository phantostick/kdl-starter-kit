-- CreateTable
CREATE TABLE "cms" (
    "id" BIGSERIAL NOT NULL,
    "slug" TEXT NOT NULL,
    "parent" TEXT,
    "type" TEXT,
    "custom_url" TEXT,
    "banner_image" TEXT,
    "banner_image_alt_text" TEXT,
    "banner_title" TEXT,
    "banner_tagline" TEXT,
    "short_description" TEXT,
    "content" TEXT,
    "gallery" TEXT,
    "main_menu" INTEGER,
    "top_menu" INTEGER,
    "side_menu" INTEGER,
    "footer_menu" INTEGER,
    "publish" INTEGER,
    "sort" BIGINT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "cms_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "address" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "seo" (
    "id" BIGSERIAL NOT NULL,
    "cms_id" BIGINT,
    "seo_title" TEXT,
    "seo_keywords" TEXT,
    "seo_description" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "seo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clients" (
    "id" BIGSERIAL NOT NULL,
    "client_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "mobile" TEXT NOT NULL,
    "company_name" TEXT,
    "password" TEXT NOT NULL,
    "address" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "clients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "invoice_details" (
    "id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "invoice_details_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "invoices" (
    "id" BIGSERIAL NOT NULL,
    "client_id" BIGINT NOT NULL,
    "invoice_no" TEXT NOT NULL,
    "amount" TEXT,
    "tax" TEXT,
    "gst" TEXT,
    "mail_sent" INTEGER,
    "issue_date" TIMESTAMP(3),
    "due_date" TIMESTAMP(3),
    "payment_status" TEXT,
    "invoice_details_id" BIGINT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "invoices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "subscriptions" (
    "id" BIGSERIAL NOT NULL,
    "client_id" BIGINT NOT NULL,
    "title" TEXT NOT NULL,
    "amount" TEXT NOT NULL,
    "description" TEXT,
    "sub_title" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "subscriptions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "payment_methods" (
    "id" BIGSERIAL NOT NULL,
    "payment_method_name" TEXT NOT NULL,
    "display_name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "sandbox_key" TEXT,
    "sandbox_secret" TEXT,
    "live_key" TEXT,
    "live_secret" TEXT,
    "publish" INTEGER,
    "sort" BIGINT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "payment_methods_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transactions" (
    "id" BIGSERIAL NOT NULL,
    "client_id" BIGINT NOT NULL,
    "invoice_id" BIGINT NOT NULL,
    "payment_method_id" BIGINT,
    "amout" TEXT,
    "payment_status" TEXT,
    "payment_date" TIMESTAMP(3),
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "transactions_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "seo" ADD CONSTRAINT "seo_cms_id_fkey" FOREIGN KEY ("cms_id") REFERENCES "cms"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invoices" ADD CONSTRAINT "invoices_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "invoices" ADD CONSTRAINT "invoices_invoice_details_id_fkey" FOREIGN KEY ("invoice_details_id") REFERENCES "invoice_details"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "subscriptions" ADD CONSTRAINT "subscriptions_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_invoice_id_fkey" FOREIGN KEY ("invoice_id") REFERENCES "invoices"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_payment_method_id_fkey" FOREIGN KEY ("payment_method_id") REFERENCES "payment_methods"("id") ON DELETE SET NULL ON UPDATE CASCADE;
