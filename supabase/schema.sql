-- AXIS — estrutura inicial do banco (Cadastros Mestres + Comercial)
-- Rode este arquivo inteiro no SQL Editor do Supabase (Dashboard > SQL Editor > New query).
-- Pode rodar quantas vezes quiser: sempre apaga e recria do zero antes de popular.

drop table if exists pedido_itens cascade;

drop table if exists pedidos cascade;

drop table if exists produtos cascade;

drop table if exists clientes cascade;

create table clientes (
  id bigint generated always as identity primary key,
  nome text not null,
  tipo text not null check (tipo in ('Pessoa Física', 'Pessoa Jurídica')),
  documento text not null,
  cidade text not null,
  uf text not null,
  telefone text not null,
  email text not null,
  status text not null default 'Ativo' check (status in ('Ativo', 'Inativo')),
  created_at timestamptz not null default now()
);

create table produtos (
  id bigint generated always as identity primary key,
  codigo text not null unique,
  descricao text not null,
  categoria text not null,
  tamanho text not null,
  cor text not null,
  preco_venda numeric(10, 2) not null,
  custo numeric(10, 2) not null,
  estoque integer not null default 0,
  unidade text not null default 'UN',
  created_at timestamptz not null default now()
);

create table pedidos (
  id bigint generated always as identity primary key,
  numero text not null unique,
  cliente_id bigint not null references clientes (id),
  data date not null,
  status text not null check (
    status in ('Em produção', 'Faturado', 'Entregue', 'Cancelado')
  ),
  created_at timestamptz not null default now()
);

create table pedido_itens (
  id bigint generated always as identity primary key,
  pedido_id bigint not null references pedidos (id) on delete cascade,
  produto_id bigint not null references produtos (id),
  quantidade integer not null,
  preco_unitario numeric(10, 2) not null
);

-- RLS: ambiente de demonstração, sem login real no Supabase ainda (o login do
-- AXIS hoje é só uma tela cosmética). Liberamos leitura pública por enquanto;
-- quando um cliente de verdade for onboardado, isso precisa ser revisto.
alter table clientes enable row level security;
alter table produtos enable row level security;
alter table pedidos enable row level security;
alter table pedido_itens enable row level security;

create policy "Leitura publica" on clientes for select using (true);
create policy "Leitura publica" on produtos for select using (true);
create policy "Leitura publica" on pedidos for select using (true);
create policy "Leitura publica" on pedido_itens for select using (true);

-- Dados de demonstração: confecção fictícia "Estilo Camisetas Ltda"
insert into
  clientes (
    nome,
    tipo,
    documento,
    cidade,
    uf,
    telefone,
    email,
    status
  )
values
  (
    'Loja Fashion Store',
    'Pessoa Jurídica',
    '12.345.678/0001-90',
    'São Paulo',
    'SP',
    '(11) 4002-8922',
    'compras@fashionstore.com.br',
    'Ativo'
  ),
  (
    'Boutique Mania de Roupa',
    'Pessoa Jurídica',
    '23.456.789/0001-11',
    'Curitiba',
    'PR',
    '(41) 3252-1010',
    'contato@maniaderoupa.com.br',
    'Ativo'
  ),
  (
    'Ana Paula Ribeiro',
    'Pessoa Física',
    '123.456.789-00',
    'Belo Horizonte',
    'MG',
    '(31) 99876-5432',
    'ana.ribeiro@email.com',
    'Ativo'
  ),
  (
    'Grife Urbana Confecções',
    'Pessoa Jurídica',
    '34.567.890/0001-22',
    'Rio de Janeiro',
    'RJ',
    '(21) 3555-7788',
    'financeiro@grifeurbana.com.br',
    'Ativo'
  ),
  (
    'Distribuidora Textil Sul',
    'Pessoa Jurídica',
    '45.678.901/0001-33',
    'Porto Alegre',
    'RS',
    '(51) 3025-4477',
    'vendas@textilsul.com.br',
    'Inativo'
  ),
  (
    'Carlos Eduardo Souza',
    'Pessoa Física',
    '987.654.321-00',
    'Salvador',
    'BA',
    '(71) 99654-3210',
    'cadu.souza@email.com',
    'Ativo'
  ),
  (
    'Rede Estampa Camisetaria',
    'Pessoa Jurídica',
    '56.789.012/0001-44',
    'Fortaleza',
    'CE',
    '(85) 3231-9900',
    'compras@estampacamisetaria.com.br',
    'Ativo'
  );

insert into
  produtos (
    codigo,
    descricao,
    categoria,
    tamanho,
    cor,
    preco_venda,
    custo,
    estoque,
    unidade
  )
values
  (
    'CAM-BAS-P-BR',
    'Camiseta Básica Algodão',
    'Básica',
    'P',
    'Branco',
    29.90,
    14.50,
    320,
    'UN'
  ),
  (
    'CAM-BAS-M-BR',
    'Camiseta Básica Algodão',
    'Básica',
    'M',
    'Branco',
    29.90,
    14.50,
    410,
    'UN'
  ),
  (
    'CAM-BAS-G-PT',
    'Camiseta Básica Algodão',
    'Básica',
    'G',
    'Preto',
    29.90,
    14.50,
    275,
    'UN'
  ),
  (
    'CAM-BAS-GG-PT',
    'Camiseta Básica Algodão',
    'Básica',
    'GG',
    'Preto',
    32.90,
    15.80,
    140,
    'UN'
  ),
  (
    'CAM-POL-M-AZ',
    'Camiseta Polo Piquet',
    'Polo',
    'M',
    'Azul Marinho',
    59.90,
    28.00,
    95,
    'UN'
  ),
  (
    'CAM-POL-G-VD',
    'Camiseta Polo Piquet',
    'Polo',
    'G',
    'Verde Musgo',
    59.90,
    28.00,
    60,
    'UN'
  ),
  (
    'CAM-REG-P-CZ',
    'Regata Dry Fit',
    'Regata',
    'P',
    'Cinza Mescla',
    34.90,
    16.20,
    180,
    'UN'
  ),
  (
    'CAM-INF-4-AM',
    'Camiseta Infantil Estampada',
    'Infantil',
    'PP',
    'Amarelo',
    24.90,
    11.00,
    210,
    'UN'
  ),
  (
    'MOL-CAP-M-CZ',
    'Moletom Canguru com Capuz',
    'Moletom',
    'M',
    'Cinza',
    89.90,
    42.00,
    70,
    'UN'
  ),
  (
    'MOL-CAP-G-PT',
    'Moletom Canguru com Capuz',
    'Moletom',
    'G',
    'Preto',
    89.90,
    42.00,
    55,
    'UN'
  ),
  (
    'CAM-BAS-PP-RS',
    'Camiseta Básica Algodão',
    'Básica',
    'PP',
    'Rosa',
    29.90,
    14.50,
    12,
    'UN'
  ),
  (
    'CAM-BAS-XG-BR',
    'Camiseta Básica Algodão',
    'Básica',
    'XG',
    'Branco',
    34.90,
    17.00,
    8,
    'UN'
  );

insert into
  pedidos (numero, cliente_id, data, status)
values
  (
    'PED-1001',
    (select id from clientes where nome = 'Loja Fashion Store'),
    '2026-08-04',
    'Entregue'
  ),
  (
    'PED-1002',
    (
      select id
      from clientes
      where
        nome = 'Boutique Mania de Roupa'
    ),
    '2026-08-10',
    'Faturado'
  ),
  (
    'PED-1003',
    (select id from clientes where nome = 'Ana Paula Ribeiro'),
    '2026-08-14',
    'Em produção'
  ),
  (
    'PED-1004',
    (
      select id
      from clientes
      where
        nome = 'Grife Urbana Confecções'
    ),
    '2026-08-18',
    'Em produção'
  ),
  (
    'PED-1005',
    (
      select id
      from clientes
      where
        nome = 'Rede Estampa Camisetaria'
    ),
    '2026-08-20',
    'Faturado'
  ),
  (
    'PED-1006',
    (
      select id
      from clientes
      where
        nome = 'Carlos Eduardo Souza'
    ),
    '2026-08-22',
    'Cancelado'
  );

insert into
  pedido_itens (pedido_id, produto_id, quantidade, preco_unitario)
values
  (
    (select id from pedidos where numero = 'PED-1001'),
    (
      select id
      from produtos
      where
        codigo = 'CAM-BAS-P-BR'
    ),
    50,
    29.90
  ),
  (
    (select id from pedidos where numero = 'PED-1001'),
    (
      select id
      from produtos
      where
        codigo = 'CAM-BAS-M-BR'
    ),
    80,
    29.90
  ),
  (
    (select id from pedidos where numero = 'PED-1002'),
    (
      select id
      from produtos
      where
        codigo = 'CAM-POL-M-AZ'
    ),
    30,
    59.90
  ),
  (
    (select id from pedidos where numero = 'PED-1002'),
    (
      select id
      from produtos
      where
        codigo = 'CAM-POL-G-VD'
    ),
    20,
    59.90
  ),
  (
    (select id from pedidos where numero = 'PED-1003'),
    (
      select id
      from produtos
      where
        codigo = 'MOL-CAP-M-CZ'
    ),
    10,
    89.90
  ),
  (
    (select id from pedidos where numero = 'PED-1004'),
    (
      select id
      from produtos
      where
        codigo = 'CAM-BAS-G-PT'
    ),
    120,
    29.90
  ),
  (
    (select id from pedidos where numero = 'PED-1004'),
    (
      select id
      from produtos
      where
        codigo = 'CAM-BAS-GG-PT'
    ),
    60,
    32.90
  ),
  (
    (select id from pedidos where numero = 'PED-1005'),
    (
      select id
      from produtos
      where
        codigo = 'CAM-INF-4-AM'
    ),
    200,
    24.90
  ),
  (
    (select id from pedidos where numero = 'PED-1006'),
    (
      select id
      from produtos
      where
        codigo = 'CAM-REG-P-CZ'
    ),
    40,
    34.90
  );
