# validate-children

Validate children is a function that uses React Proptypes to validate what
components are allowed as children of the parent component

For example:

```
Card.propTypes = {
    children: (props) =>
        validateChildren("Card", props, {
        custom: [CardHeader.name, CardContent.name],
        fragment: true,
    }),
};
```

This application allows React.Fragment, CardHeader and CardContent components to be used in
the Card component

With additional parameters this list can be expanded:

```
interface AllowedTypes {
    string?: boolean; // Default false
    number?: boolean; // Default false
    boolean?: boolean; // Default true
    undefined?: boolean; // Default true
    null?: boolean; // Default true
    fragment?: boolean; // Default false
    function?: boolean; // Default true
    // Component names that are allowed - [CardHeader.name, CardContent.name]
    custom?: string[];
}
```

Contributions:

Many thanks to Kaspar Suvi and Harles-Herman Pilter for additional improvements and tests to this utility
