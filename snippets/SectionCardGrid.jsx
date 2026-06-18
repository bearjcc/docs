export const SectionCardGrid = ({ cards, cols = 2 }) => (
  <CardGroup cols={cols}>
    {cards.map((card) => (
      <Card key={card.href} title={card.title} icon={card.icon} href={card.href}>
        {card.description}
      </Card>
    ))}
  </CardGroup>
);
