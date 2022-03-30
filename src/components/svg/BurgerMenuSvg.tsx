import React from 'react';

function BurgerMenuSvg({ className = '' }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width="27"
      height="32"
      fill="none"
      viewBox="0 0 27 32"
    >
      <path fill="url(#BurgerMenuSvg)" d="M0 0H27V32H0z" transform="matrix(-1 0 0 1 27 0)"></path>
      <defs>
        <pattern id="BurgerMenuSvg" width="1" height="1" patternContentUnits="objectBoundingBox">
          <use transform="matrix(.00231 0 0 .00195 -.093 0)" xlinkHref="#image0_42_680"></use>
        </pattern>
        <image
          id="image0_42_680"
          width="512"
          height="512"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAvjSURBVHic7d3Pq1XV/8fx5z1mkDgyG4hKVJSOmih9RkE5iyYN+gHZoKCJpH9Cs4YOgjCKoJFCkJMgHYV/QOgsQQWhTHOQOkkCteQ72PfWRa9Xb92zz7fr4zE6Z+21z3nN1pu1116rAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgP+P5v7hfeuqF6qXq13VzmpLtbFavzrRAIBFblXXq1+qs9Wp6kT1fXV7pT+20gJge/VB9U61daV/BgCsuovV4erQ/OcH8qAFwBPVR9W71aMrTQYATN3N6svqw+rK/To/SAHwdvVJtenf5QIARnC12l99tVyn5QqA9dWn1furGAoAGMfn1YGGtQN3uVcBsKE6Wr0ypVAAwPQdr96ofr/zwlIFwPrqmwz+ALAWfFe92rBG4C/rluj4efXWGIkAgKl7umEx/7HFjXcWAHsbVvsDAGvH7upMdXqhYfEjgMfnL24eORQAMH3Xqh3NvyK4eAbg4+rFWSQCAKbusYYde4/X3zMA26rz2eQHANaym9Wz1YXJfMP+DP4AsNY9Wu2rYQZgUv3UMAsAAKxtl6onJ9X/MvgDwMNia7Vr0nCkLwDw8NgzaXg3EAB4eOyaVM/NOgUAMKodk2rLrFMAAKPaMlfdyCuAAPAwuTG5fx8AYK2ZVNdnHQIAGNVvk+ryrFMAAKO6PKnOzToFADCqs5Pq5KxTAACjOjmpTsw6BQAwqhMLhwH9WG2fbRYAYAQXqqcm1e3qyIzDAADjOFLdnpv/sq06nw2BAGAtu1E9U11a2AjoYvXl7PIAACP4orpUNbeocVN1tto8i0QAwFRdrXZWV2pYALjgWnVgFokAgKnb1/zgX7Xujos/NJwOuHvMRADAVB2qDi5umFui07rqaPXaGIkAgKk61jCm/7G4canTAP+s9lbHRwgFAEzPt9Wb3TH4192PABbcqr6unsjjAAD4LzpUvdfw6t9d7lUA1LBB0LHqTPVStWG1kwEAq+7XhoH/YMNYvqTlCoAFpxv2CNhYPV89shrpAIBVdaP6rHq9OnW/zkstAlzO1mp/wxoBZwcAwOz9XB1umPK/9KA3rbQAWDBpWBuwp9pV7WgoDjZmO2EAmIab1fWG3XvPVScbTvQ91TJT/QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsb+4f3reueqF6udpV7ay2VBur9asTDQBY5FZ1vfqlOludqk5U31e3V/pjKy0AtlcfVO9UW1f6ZwDAqrtYHa4OzX9+IA9aADxRfVS9Wz260mQAwNTdrL6sPqyu3K/zgxQAb1efVJv+XS4AYARXq/3VV8t1Wq4AWF99Wr2/iqEAgHF8Xh1oWDtwl3sVABuqo9UrUwoFAEzf8eqN6vc7LyxVAKyvvsngDwBrwXfVqw1rBP6ybomOn1dvjZEIAJi6pxsW8x9b3HhnAbC3YbU/ALB27K7OVKcXGhY/Anh8/uLmkUMBANN3rdrR/CuCi2cAPq5enEUiAGDqHmvYsfd4/T0DsK06n01+AGAtu1k9W12YzDfsz+APAGvdo9W+GmYAJtVPDbMAAMDadql6clL9L4M/ADwstla7Jg1H+gIAD489k4Z3AwGAh8euSfXcrFMAAKPaMam2zDoFADCqLXPVjbwCCAAPkxuT+/cBANaaSXV91iEAgFH9NqkuzzoFADCqy5Pq3KxTAACjOjupTs46BQAwqpOT6sSsUwAAozqxcBjQj9X22WYBAEZwoXpqUt2ujsw4DAAwjiPV7bn5L9uq89kQCADWshvVM9WlhY2ALlZfzi4PADCCL6pLVXOLGjdVZ6vNs0gEAEzV1WpndaWGBYALrlUHZpEIAJi6fc0P/lXr7rj4Q8PpgLvHTAQATNWh6uDihrklOq2rjlavjZEIAJiqYw1j+h+LG5c6DfDPam91fIRQAMD0fFu92R2Df939CGDBrerr6ok8DgCA/6JD1XsNr/7d5V4FQA0bBB2rzlQvVRtWOxkAsOp+bRj4DzaM5UtargBYcLphj4CN1fPVI6uRDgBYVTeqz6rXq1P367zUIsDlbK32N6wRcHYAAMzez9Xhhin/Sw9600oLgAWThrUBe6pd1Y6G4mBjthMGgGm4WV1v2L33XHWy4UTfUy0z1Q8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADA8ub+4X3rqheql6td1c5qS7WxWr860QCARW5V16tfqrPVqepE9X11e6U/ttICYHv1QfVOtXWlfwYArLqL1eHq0PznB/KgBcAT1UfVu9WjK00GAEzdzerL6sPqyv06P0gB8Hb1SbXp3+UCAEZwtdpffbVcp+UKgPXVp9X7qxgKABjH59WBhrUDd7lXAbChOlq9MqVQAMD0Ha/eqH6/88JSBcD66psM/gCwFnxXvdqwRuAv65bo+Hn11hiJAICpe7phMf+xxY13FgB7G1b7AwBrx+7qTHV6oWHxI4DH5y9uHjkUADB916odzb8iuHgG4OPqxVkkAgCm7rGGHXuP198zANuq89nkBwDWspvVs9WFyXzD/gz+ALDWPVrtq2EGYFL91DALAACsbZeqJyfV/zL4A8DDYmu1a9JwpC8A8PDYM2l4NxAAeHjsmlTPzToFADCqHZNqy6xTAACj2jJX3cgrgADwMLkxuX8fAGCtmVTXZx0CABjVb5Pq8qxTAACjujypzs06BQAwqrOT6uSsUwAAozo5qU7MOgUAMKoTC4cB/Vhtn20WAGAEF6qnJtXt6siMwwAA4zhS3Z6b/7KtOp8NgQBgLbtRPVNdWtgI6GL15ezyAAAj+KK6VDW3qHFTdbbaPItEAMBUXa12VldqWAC44Fp1YBaJAICp29f84F+17o6LPzScDrh7zEQAwFQdqg4ubphbotO66mj12hiJAICpOtYwpv+xuHGp0wD/rPZWx0cIBQBMz7fVm90x+NfdjwAW3Kq+rp7I4wAA+C86VL3X8OrfXe5VANSwQdCx6kz1UrVhtZMBAKvu14aB/2DDWL6k5QqABacb9gjYWD1fPbIa6QCAVXWj+qx6vTp1v85LLQJcztZqf8MaAWcHAMDs/Vwdbpjyv/SgN620AFgwaVgbsKfaVe1oKA42ZjthAJiGm9X1ht17z1UnG070PdUyU/0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAf8v/Ad0pRFiK920EAAAAAElFTkSuQmCC"
        ></image>
      </defs>
    </svg>
  );
}

export default BurgerMenuSvg;
