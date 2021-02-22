type Submarket = 1 | 2 | 3 | 4 | 5 | 6 | 7;

const submarketHighlights: {[Key in Submarket]: {
  highlights: {}
}} = {
  1: {
    highlights: {
      "Racially and ethnically diverse, but with declining Black and growing White population": "Duis auctor, sapien scelerisque euismod laoreet, justo leo porta nisl, non cursus lectus lacus et mauris.",
      "Mostly younger adults without children": "Nulla gravida justo scelerisque nibh bibendum bibendum. Fusce et tempor urna, vel gravida turpis. Aenean varius volutpat justo vitae pretium.",
      "High rate of college education": "Phasellus laoreet ex turpis. Maecenas sed vehicula velit.",
      "Above average rate of severe cost burden": "Fusce ultrices mi in sapien ultrices maximus.",
    }
  },
  2: {
    highlights: {
      "A consequat mauris laoreet": "Nam rutrum, neque et rutrum sodales, turpis lacus sagittis nisi, volutpat varius dui ipsum id lectus.",
      "Interdum et malesuada": "In placerat pretium urna, id pulvinar arcu dignissim vitae.",
      "Proin lacinia": "Praesent ac commodo ligula, consectetur scelerisque odio.",
      "Felis et neque tempus": "Curabitur et dapibus augue, id maximus felis. Nullam non dui rhoncus, sodales tellus nec, bibendum lacus.",
    }
  },
  3: {
    highlights: {
      "Proin lacinia": "Aenean vehicula, nisi sit amet accumsan imperdiet, leo velit varius enim, quis faucibus dolor felis non velit.",
      "Vitae consequat": "Nunc viverra semper sem, in placerat metus tempus sed.",
      "Cras est dolor, pulvinar eu magna": "Duis at ultrices nisi, et ullamcorper diam. Donec luctus eget arcu at dignissim.",
      "A consequat mauris laoreet": "Donec mollis dolor dolor, sed hendrerit lectus efficitur ac.",
    }
  },
  4: {
    highlights: {
      "Pellentesque habitant morbi tristique": "Phasellus bibendum nibh quis justo ullamcorper varius in sit amet orci.",
      "Senectus et netus et malesuada": "Maecenas mauris velit, molestie at justo et, sollicitudin tempor arcu. Quisque accumsan lorem sit amet lorem posuere congue.",
      "Interdum et malesuada": "Curabitur maximus commodo tortor ac faucibus. Proin feugiat tempor condimentum.",
    }
  },
  5: {
    highlights: {
      "Cras est dolor, pulvinar eu magna": "Duis sed laoreet magna, at ultrices est. Fusce et ante at enim finibus dignissim nec sed magna.",
      "Fames ac turpis": "Vivamus efficitur dapibus quam, vitae faucibus justo fringilla auctor. Vestibulum congue dui massa.",
      "Maecenas efficitur lacinia": "Ec fermentum ex scelerisque at. Quisque libero lectus, suscipit eu molestie sed, bibendum non massa.",
      "Proin lacinia": "Nam fermentum tincidunt sem, ac tristique risus dictum vel.",
    }
  },
  6: {
    highlights: {
      "Cras est dolor, pulvinar eu magna": "Duis consectetur arcu vel mauris ullamcorper, et accumsan est ullamcorper.",
      "Egestas ullamcorper tellus": "Sed eget purus eget ante tempor consequat. Quisque elementum urna vitae ligula dignissim dictum.",
      "A consequat mauris laoreet": "Nunc arcu diam, semper tincidunt egestas vitae, viverra nec libero.",
      "Interdum et malesuada": "In sit amet nulla sollicitudin purus mollis aliquam. Lorem ipsum dolor sit amet.",
      "Fames ac ante ipsum primis": "Consectetur adipiscing elit. Nunc nec sapien et lectus elementum porta ac quis mi."
    }
  },
  7: {
    highlights: {
      "Egestas ullamcorper tellus": "Ut in lobortis odio, eget bibendum libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      "Interdum et malesuada": "Mauris tristique sem massa, eget pharetra sem venenatis sit amet. Donec id mattis massa.",
      "Fames ac ante ipsum primis": "Dam venenatis, ante eu cursus sodales, neque massa posuere arcu, at interdum tellus justo at ligula.",
      "Maecenas efficitur lacinia": "Maecenas facilisis tempus tortor et eleifend. Nam ultricies ullamcorper enim ut.",
    }
  }
}

export { submarketHighlights };